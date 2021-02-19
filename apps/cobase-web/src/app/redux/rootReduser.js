/**
 *
 * rootReduser
 *
 */

import update from 'immutability-helper'

import {
  TOGGLE_SUBTASK,
  SET_TASK_COMPLETED,
  UPDATE_TASK_PROGRESS,
  SET_LAST_UPDATE_TIME,
} from './constans'

import initialState from './initialState'

const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SUBTASK:
      const { subTaskId } = action.payload

      const subTaskIndex = state.tasks[
        action.payload.taskIndex
      ].subtasks.findIndex((subtask) => subtask.id === subTaskId)

      return update(state, {
        tasks: {
          [action.payload.taskIndex]: {
            subtasks: {
              [subTaskIndex]: {
                $toggle: ['completed'],
              },
            },
          },
        },
      })

    case SET_TASK_COMPLETED:
      return update(state, {
        tasks: {
          [action.payload.taskIndex]: {
            progress: { $set: 'Completed' },
            subtasks: {
              $apply: (subtasks) =>
                subtasks.map((item, i) => {
                  if (i === subtasks.length) return item
                  return {
                    ...item,
                    completed: true,
                  }
                }),
            },
          },
        },
      })

    case UPDATE_TASK_PROGRESS:
      return update(state, {
        tasks: {
          [action.payload.taskIndex]: {
            progress: { $set: action.payload.progress },
          },
        },
      })

    case SET_LAST_UPDATE_TIME:
      return update(state, {
        tasks: {
          [action.payload.taskIndex]: {
            updated: { $set: action.payload.timestamp },
          },
        },
      })

    default:
      return state
  }
}

export default rootReduser

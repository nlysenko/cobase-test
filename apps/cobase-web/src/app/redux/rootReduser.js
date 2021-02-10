/**
 *
 * rootReduser
 *
 */

// import update from 'immutability-helper'

import { TOGGLE_SUBTASK } from './constans'

import initialState from './initialState'

const rootReduser = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SUBTASK:
      const { taskId, subTaskId } = action.payload

      const taskIndex = state.tasks.findIndex((task) => task.id === taskId)
      const subTaskIndex = state.tasks[taskIndex].subtasks.findIndex(
        (subtask) => subtask.id === subTaskId
      )

      const arr = [...state.tasks]

      arr[taskIndex].subtasks[subTaskIndex].completed = !arr[taskIndex]
        .subtasks[subTaskIndex].completed

      return Object.assign({}, { tasks: arr })

    default:
      return state
  }
}

export default rootReduser

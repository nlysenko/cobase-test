/**
 *
 * actions
 *
 */

import { TOGGLE_SUBTASK, SET_TASK_COMPLETED } from './constans'

export const toggleSubtask = (taskIndex, subTaskId) => {
  return {
    type: TOGGLE_SUBTASK,
    payload: {
      taskIndex,
      subTaskId,
    },
  }
}

export const setTaskCompleted = (taskIndex) => {
  return {
    type: SET_TASK_COMPLETED,
    payload: {
      taskIndex,
    },
  }
}

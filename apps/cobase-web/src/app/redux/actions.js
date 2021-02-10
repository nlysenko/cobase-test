/**
 *
 * actions
 *
 */

import { INIT_TASK, TOGGLE_TASK, TOGGLE_SUBTASK } from './constans'

export const initTask = () => {
  return {
    type: INIT_TASK,
  }
}

export const toggleTask = (count) => {
  return {
    type: TOGGLE_TASK,
    payload: {
      count,
    },
  }
}

export const toggleSubtask = (taskId, subTaskId) => {
  return {
    type: TOGGLE_SUBTASK,
    payload: {
      taskId,
      subTaskId,
    },
  }
}

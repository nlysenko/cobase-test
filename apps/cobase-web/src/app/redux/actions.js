/**
 *
 * actions
 *
 */

import {
  TOGGLE_SUBTASK,
  SET_TASK_COMPLETED,
  UPDATE_TASK_PROGRESS,
  SET_LAST_UPDATE_TIME,
} from './constans'

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

export const updateProgress = (taskIndex, progress) => {
  return {
    type: UPDATE_TASK_PROGRESS,
    payload: {
      taskIndex,
      progress,
    },
  }
}

export const setLastUpdateTime = (taskIndex, timestamp) => {
  return {
    type: SET_LAST_UPDATE_TIME,
    payload: {
      taskIndex,
      timestamp,
    },
  }
}

/**
 *
 * actions
 *
 */

import { TOGGLE_SUBTASK } from './constans'

export const toggleSubtask = (taskId, subTaskId) => {
  return {
    type: TOGGLE_SUBTASK,
    payload: {
      taskId,
      subTaskId,
    },
  }
}

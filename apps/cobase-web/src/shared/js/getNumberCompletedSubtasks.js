/**
 *
 * getNumberCompletedSubtasks
 *
 */

const getNumberCompletedSubtasks = (arr) => {
  return arr.reduce((sum, subtask) => {
    return sum + subtask.completed
  }, 0)
}

export default getNumberCompletedSubtasks

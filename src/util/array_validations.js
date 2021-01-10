const isAValidArray = (arr) => Boolean(arr && Array.isArray(arr))

/*
 * This algorithm visit each element of failedProcesess array n time depending the length of executedProcesses
 * it's easy to implement but, it's very slow
 * O(NxM) (where N = length of executedProcesses array and M = length of failedProcesess array)
 */
const bruteForce = (executedProcesses, failedProcesess) => {
  if (!(isAValidArray(executedProcesses) && isAValidArray(failedProcesess))) {
    throw new Error('Not a valid elements received')
  }
  let foundElement = false
  for (let i = 0; i < executedProcesses.length; i++) {
    for (let j = 0; j < failedProcesess.length; j++) {
      if (executedProcesses[i] === failedProcesess[j]) foundElement = true
    }
  }
  return foundElement
}

/**
 * this function still being like a brute force with O(NXM) (the includes function has linear time O(N) and we're calling this function
 * for each element in the failedProcesess array)
 * the difference is we're using "includes" function that allow us to have
 * a better readeble code, also in this case we can see that once we get an element repeated we return the value and stop
 * the iteration. This action, while it's good becasue in the best cases you could reduce your time, does not affect the Time complexity in
 * when the N is too big (tends to infinity)
 */

const isElementIncluded = (executedProcesses, failedProcesess) => {
  if (!(isAValidArray(executedProcesses) && isAValidArray(failedProcesess))) {
    throw new Error('Not a valid elements received')
  }
  for (let i = 0; i < failedProcesess.length; i++) {
    if (executedProcesses.includes(failedProcesess[i])) return true
  }
  return false
}

/**
 * this is an optimization to the previous function.
 * Using a Set we can reduce the time complexity becasuse for each element in failed processes we're
 * calling a O(1) function (set.has). In this case the time complexity is O(A+B) where is the sum of the length of both arrays
 * Just one "problem" with this approach, generating Sets you need to allocate in memory the information of this set having in this case
 * a space complexity of O(M) where M is the length of executedProcesses array
 * The previous functions does not have this problem with memory.
 *
 */
const isElementIncludedInSet = (executedProcesses, failedProcesess) => {
  if (!(isAValidArray(executedProcesses) && isAValidArray(failedProcesess))) {
    throw new Error('Not a valid elements received')
  }
  const executedSet = new Set(executedProcesses)
  for (let i = 0; i < failedProcesess.length; i++) {
    if (executedSet.has(failedProcesess[i])) return true
  }
  return false
}

module.exports = {
  bruteForce,
  isElementIncluded,
  isElementIncludedInSet
}

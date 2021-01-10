const {
  bruteForce,
  isElementIncluded,
  isElementIncludedInSet
} = require('../src/util/array_validations')

const failedRules = ['propertyType', 'homeCondition']
const executedRules = ['yearBuilt', 'homeCondition']

const isInBothBF = bruteForce(executedRules, failedRules)
const isInBothEI = isElementIncluded(executedRules, failedRules)
const isInBothEIS = isElementIncludedInSet(executedRules, failedRules)

console.log('result using brute force', isInBothBF)
console.log('result using Includes function', isInBothEI)
console.log('result using SET element', isInBothEIS)

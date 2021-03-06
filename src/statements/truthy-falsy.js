/**
 * Every value in JavaScript has an inherent boolean value.
 * When that value is evaluated in the context of a boolean expression,
 * the value will be transformed into that inherent boolean value.
 * A value is **falsy** if it converts to false when evaluated in a boolean context.
 * A value is **truthy** if it converts to true when evaluated in a boolean context.
 * Here’s the list of all of the falsy values:
 * - the Boolean value false
 * - the null type
 * - the undefined type
 * - the number 0
 * - the empty string ""
 * - the odd value NaN
 * Essentially, if it's not in the list of falsy values, then it's truthy!
 */
/* * * * * * * * * * * * * * * * * * */
const myString = ''
if (myString) {
  console.log('the value is truthy')
} else {
  console.log('the value is falsy')
}
/* * * * * * * * * * * * * * * * * * */
const myNumber = 1
if (myNumber) {
  console.log('the value is truthy')
} else {
  console.log('the value is falsy')
}

// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  for(let i = 0; i < items.length; i++)
  arr = items;
  function cb() {
  return arr.length;
  }
  return cb();
  // getLength passes the length of the array into the callback.
}
console.log(getLength());

function last(arr, cb) {
  arr = items;
  function cb() {
    return arr.pop();
  }
  return cb();
  // last passes the last item of the array into the callback.
}
console.log(last());

function sumNums(x, y, cb) {

  function cb() {
    return x + y;
  }
  return cb();
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
console.log(sumNums(12, 10));

function multiplyNums(x, y, cb) {

  function cb() {
    return x * y;
  }
  return cb();
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
console.log(multiplyNums(6, 5));
function contains(item, list, cb) {
  list = items;
  function cb() {
    if(list.includes.checks) {
      return true;
    } else {
      return false;
    }
  }
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb();
}
console.log(contains());

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

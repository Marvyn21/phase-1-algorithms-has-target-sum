// function hasTargetSum(array, target) {
//   // Write your algorithm here
//   for (let i = 0; i < array.length; i++){
//     for (let j = i + 1; j < array.length; j++){
//       if (array[i] + array[j] === target){
//         return true;
//       }
//     }
//   }
//   return false;
// }


function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenElement = {};
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (seenElement[complement]) {
      return true;
    }
    seen[array[i]] = true;
  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
  Time complexity of O(n)  
*/

/* 
  Add your pseudocode here
  The function iterates through the array and checks if the complement of the current element (i.e., the difference between the target and the current element) is already in the hash table.
  If it is, the function returns true. If it's not, the function adds the current element to the hash table and continues iterating through the array.
  At the end of the loop, if no matching pairs were found, the function returns false.
*/

/*
  Add written explanation of your solution here
  We use a hash table to keep track of elements of we have seen so far.
  I start by initializing an empty hash table seenElement{}.
  For each element in the array I calculated its complement. That is the value that when added to the current element will sum up to the target.
  If the complement is already in the hash table it means we've already seen the other element that would sum up to the target so we return true.
  If the complement is not in the hash table we add the current element to the hash table and continue iterating through the array.
  The main benefit of using a hash table in this case is it allow a quick check if the complenent is already in the hash table.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

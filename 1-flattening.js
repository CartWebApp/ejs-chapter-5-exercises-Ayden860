let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// let combination = arrays[0] + "," + arrays[1] + "," + arrays[2];
let combination = [];
/* This kinda works */
for(let i = 0; i < arrays.length; i++)
{
    combination += arrays[i] + ",";
}
// */
// for (let char of arrays) {
//     char += arrays
//     console.log(char);
//   }
// const all = [];
// for(let i = 0; i < arrays.length; i++)
// {
    // all.push(arrays.forEach(i));
    // all += arrays[i];
    // if(Array.isArray(arrays))
    // {
        // console.log("Hello");
        // arrays[i] + ",";
        // all arrays[i];
    // }
    // return arrays;
// }
// combination.pop(-1);
/* Still in process
arrays.forEach(element => {
  combination.push(element);
});
*/
// → [1, 2, 3, 4, 5, 6]
console.log(combination);

/*  Use this to study
const flatten = (arr) => {
    const result = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(...flatten(item));
      } 
      else {
        result.push(item);
      }
    });
    return result;
  };
  
  // Usage
  const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
  console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
  */
const arr=[1,23,54,6,7,9,32];
//push
console.log("org arr", arr)
arr.push(59);
console.log("push arr",arr);
//pop
console.log("org arr", arr)
arr.pop();
console.log(" pop arr",arr);
//unshift
console.log("org arr", arr)
arr.unshift(59)
console.log("unshift arr",arr);

//shift
console.log("org arr", arr);
arr.shift();
console.log("shift arr",arr);
//sorting
console.log("org arr",arr);
arr.sort((a,b) => a-b);
console.log("sorted arr" , arr);
arr .reverse();
console.log("dec sorted", arr);
//slice
console.log("org arr",arr);
const newArr = arr.slice (2,4);
console.log("org arr",arr);
console.log("spliced arr", newArr);
//splice
console.log(" org arr", arr);
arr.splicedArr=arr.splice(1,2,"item1",2);
console.log("After splice" ,arr);
console.log("spliced  from arr", arr);
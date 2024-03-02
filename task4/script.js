// A.print odd number in an array
//anonymous function:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});

console.log(oddNumbers);
//output
//[1,3,5,7]

// IIFE:
( function(){
    var odd=[1,8,9,6,987];
    for (var i =0;i<odd.length;i++){

    if(odd[i] %2 !=0){
        console.log([odd[i]]);

    }}
    
}) ();

// output:

// [ 1 ]
// [ 9 ]
// [ 987 ]
//arrow function:

const box=[1,2,3,4,5,6,7,8,9];
const odd=box.filter(n=>n%2);
console.log(odd);

// //output:
// [ 1, 3, 5, 7, 9 ]

// B.convert all the string to title caps in a string array
// anoymous function:
let strings = ["apple", "banana", "orange", "grape"];

let titleCaps = strings.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
});

console.log(titleCaps);
//output:
//['Apple','Bananna','orange']

// IIFE:
(function () {
    var fun="hey how are you?";
    var word =fun.toUpperCase();
    console.log([word]);
})();

// //output:
// [ 'HEY HOW ARE YOU?' ]

// arrow function:
function titleCase(str){
    return str.toLowerCase().replace(/\b(\w)/g,s=>s.toUpperCase());
}
  

console.log([titleCase("hi tami !")]);
console.log([titleCase("how are you?")]);

// //output:
// [ 'Hi tami!' ]
// [ 'How Are You?' ]

// C.sum of all numbers in an array
// anoymous function:
const Arrry = [1, 2, 3, 4, 5];

const sum = function(Arrry) {
    let total = 0;
    Arrry.forEach(function(num) {
        total += num;
    });
    return total;
};

console.log(sum(Arrry)); 
// Output: 15
// IIFE:

(function() {
    var a=7;
    var b =9;
    console.log([a+b]);
}) ();
//output:   [ 16 ]

// arrow function:
const arun=[6,8,9,5,4];
const add=arun.reduce((sum,curr)=>sum+curr);
console.log([add]);

// //output:
// [ 32 ]
//D.return all the prime number in an array
// anoymous function:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = arr.filter(function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log(primeNumbers); 
// Output: [2, 3, 5, 7]

// IIFE:
(function() {
    var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]; // Sample array

    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (var i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }

    var primes = numbers.filter(isPrime);
    console.log(primes);
})();

// output:
// [ 2,3,5,7 ]


// arrow function:
const Arrr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const prime = Arrr.filter(num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
});

console.log(primeNumbers);
 // Output: [2, 3, 5, 7]

// E.return all the palindromes in an array
// anoymous function:
const Arr = ["level", "hello", "noon", "world", "racecar"];

const palindromes = Arr.filter(function(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
});

console.log(palindromes);

// Output: ["level", "noon", "racecar"]

//IIFE:
(function(){
    var string =("car","racecar");
    var len=string.length;
    for(var i=0;i<len/2;i++){
        if(string[i] !=string[len-1-i]){
            return  "It is not a palindrome";
        }
    }
    console.log([string + " " +"is a palindrome"]);
})();
// OUTPUT:
//['racecar is a palindrome']
//arrow function:
const shortpalindromes=(words)=>words.filter((word)=>word.split("").reverse().join("")===word);
console.log(shortpalindromes(["civic","pens","pencil"]));

// output:

// [ 'civic' ]


//F.return median of two sorted arrays of the same size.
//anoymous function:
const findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};

// Example usage:
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
console.log(findMedianSortedArrays(nums1, nums2)); 

// Output: 3.5
//IIFE:

const Nums1 = [1, 3, 5];
const Nums2 = [2, 4, 6];

const median = (function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const length = mergedArray.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
})(nums1, nums2);

console.log(median);

 // Output: 3.5

//G.remove duplicates from an array
//anoymous function:

const arrr = [1, 2, 3, 4, 1, 2, 5, 6, 3];

const uniqueArray = arrr.filter((value, index, self) => self.indexOf(value) === index);

console.log(uniqueArray); 

// Output: [1, 2, 3, 4, 5, 6]

//IIFE:
( function(){
    const amarArray = [1, 1, 2, 3, 4, 5, 5]
    
    const amarArrayWithoutDuplicates = [...new Set(amarArray)]
    
    let duplicates = [...amarArray]
    amarArrayWithoutDuplicates.forEach((item) => {
      const i = duplicates.indexOf(item)
      duplicates = duplicates
        .slice(0, i)
        .concat(duplicates.slice(i + 1, duplicates.length))
    })
    
    console.log(duplicates);
}) () ;

// output:
// [1,5]

//H.rotate an array by k times
//anoymous function:
let array = [1, 2, 3, 4, 5];
let k = 2;

let rotateArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
};

console.log(rotateArray(array, k));
//output:
//[4, 5, 1, 2, 3]

//IIFE:
let Array = [1, 2, 3, 4, 5];
let K= 2;

let rotatedArray = (function(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
})(array.slice(), k);

console.log(rotatedArray);
//output:
//[2, 3, 4, 5, 1]
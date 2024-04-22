// function reverseString(str){
//     let newString = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         newString += str[i];
//     }
//     return newString
// }

// console.log(reverseString("Hello World"));

// function isPalindrome(str){
//     let nString = str.toLowerCase();
//     let newString = '';

//     for(let i = str.length - 1; i >= 0; i--){
//         newString += str[i].toLowerCase();
//     }
//     return (newString == nString) ? true : false;
// }

// console.log(isPalindrome("HeLLeh"));
// console.log(isPalindrome("hello worlD"));



// function findGCD(a, b) {
//         // if (b > a) return findGCD(b, a);
//         // if (!b) return a;
//         // return findGCD(b, a % b);
        
//         let a1 = a;
//         let b1 = b;

//         while(a != 0 && b != 0){
//             if(a1 > b1){
//                 a1 %= b1;
//             } else {
//                 b1 %= a1;
//             }
//         }
//     return a + b; 
//     }
const findGCD = (a, b) => (!b ? a : findGCD(b, a % b));

console.log(findGCD(6, 9))

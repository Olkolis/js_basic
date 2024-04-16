'ДЗ - 3'

// let it = +prompt('Введіть число','')

// if (it % 15 === 0){
//     console.log('FizzBuzz')
// } else if (it % 5 === 0){
//     console.log('Buzz')
// } else if (it % 3 === 0){
//     console.log('Fizz')
// };

let i = +prompt('Введіть рік','')

if (i % 400 === 0){
    console.log('Рік високосний');
}else if (i % 4 === 0 && i % 100 !== 0){
    console.log('Рік високосний');
} else {
    console.log('Рік не високосний');
}

// let i = +prompt('Введіть скільки вам років',);

// let j = i % 10;
// if (j == 1){
//     console.log(`Тобі ${i} рік`);
// } else if (j >= 2 && j <= 4){
//     console.log(`Тобі ${i} роки`);
// } else if (j >= 5 || j == 0){
//     console.log(`Тобі ${i} років`);
// }


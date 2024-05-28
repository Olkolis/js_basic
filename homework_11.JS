// Завдання №1
// Вам необхідно написати функцію-декоратор logArguments(fn), яка приймає на вхід функцію і додає можливість логувати всі аргументи, передані у функцію-аргумент.

const arr1 = ['a', 'b'];
const arr2 = ['b', 'a'];

function fn(x, y){
    return sumArray = x.concat(y).join().toUpperCase(); 
}

function logArguments(x, y){
    console.log(fn(x, y));
}

logArguments(arr1, arr2);

// Завдання №2
// Вам необхідно написати функцію-декоратор validate(fn, validator), яка приймає на вхід функцію і додає можливість перевіряти аргументи, передані у функцію fn, на відповідність заданому validator. Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.

function sum(...nums){
    let sum = 0;
        
    for (let num of nums) {
        sum += num;
    }    
    return sum;
}

function valid(value){
  return typeof value == 'number';
}
function validate(fn, validator){
    let cache = new Map();

    return function(){
        for(let i = 0; i < arguments.length; i++){
            if (!validator[i](arguments[i])) {
                alert('Parameter is not a Number!');
            }
        }
        cache.get(this, arguments);
        return fn.apply(this, arguments);
    }    
}

const caSum = validate(sum, [valid, valid, valid]);

console.log(caSum(1, 'Ibrahim'))
console.log(caSum(1, 3, 8))

// Завдання №3
// Вам необхідно написати функцію-декоратор retry(fn, maxAttempts), яка приймає на вхід функцію і додає можливість викликати функцію з максимальною кількістю спроб у разі помилки та повертає результат останнього виклику.

let currentCount = 0;

function retry(fn, maxAttempts){
    let resoult = null;

    if(currentCount === maxAttempts){
        resoult = fn
    } else if(fn != 0){
        currentCount++;
    } else {
        resoult = fn
    }
    
    return resoult
}

let count = retry(sum, 3);

console.log(count(1, 'Ibrahim'))
console.log(count(2, 3, 8))
console.log(count(1, 4, 8))
console.log(count(1, 3, 9))





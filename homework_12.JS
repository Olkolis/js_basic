// Вам необхідно написати функцію summarize(num), яка приймає на вхід число і повертає функцію, яка під час виклику додає це число до аргументу і повертає результат. Якщо аргумент не передано, то додається одиниця. Наприклад, якщо функція викликається з аргументом 5, то функція, що повертається, повинна при виклику з аргументом 3 повернути 8 (тому що 3 + 5 = 8) або 6, якщо аргумент не буде передано.

// function summarize(num){
//     let j = num;
//     let resoult = 0;

//     function su(x){
//         let i = 0;

//         if(j == undefined) {
//             i += 1
//         } else {
//             while (x <= j) { 
//                 resoult + 1;
//             }
//         }
//         resoult = i; 
//     }
//     su() 
// }
function summarize(num) {
    return function (y) {
        if(y == undefined){
            return num + 1
        }else{
            return num + y;
        }
    };
}
  
let add5 = summarize(5);
let add10 = summarize(10);
  
console.log(add5()); // 6
console.log(add10(3)); // 13


// Вам необхідно написати функцію counter(startValue, step), яка приймає на вхід два параметри - стартове значення лічильника і його крок. Функція повертає нову функцію, яка при кожному виклику збільшує лічильник на значення і повертає його поточне значення. Лічильник повинен мати методи increment, decrement і reset, які збільшують або зменшують значення на step і скидають значення до стартового, відповідно.

function counter(startValue) {
    let privateCounter = startValue;

    function changeBy(step) {
        privateCounter += step;
    }
  
    return {
        increment: function(step) {
            changeBy(step);
        },
        decrement: function(step) {
            changeBy(-step);
        },
        value: function() {
            return privateCounter;
        },
    };
};
const count = counter(2);

console.log(count.increment(2)); 
console.log(count.increment(2)); 
console.log(count.value(2)); 
console.log(count.decrement(2)); 

// Вам необхідно написати функцію sequence(fn, fn), яка приймає на вхід дві або більше функції і повертає нову функцію, яка викликає їх послідовно з результатом попереднього виклику. Результат останньої функції має бути повернутий новою функцією. Кожна функція повинна мати доступ до результату попередньої функції через замикання.

function fn1(){
    alert('1')
}
function fn2(){
    alert('2')
}

function sequence(...args){
    let counter = 0;
    let arg = args[counter];

    return function(){
        return counter++;
    }

}

console.log(sequence(fn1(), fn2()))
console.log(sequence(counter(), summarize()))
// Вам необхідно написати функцію doubleLetter(str), яка приймає на вхід рядок і повертає новий рядок, у якому кожен символ повторюється двічі hello ⇒ hheelllloo.

function doubleLetter(str){
    let k = [];
    for(let i = 0; i < str.length; i++){
        k += str[i] + str[i]; 
    }
    return k
}
console.log(doubleLetter('a-l-l-o-h-a'))

// Вам необхідно написати функцію padString(str, length, symbol, toLeft), яка приймає на вхід рядок, число, що є довгим рядком, який ми хочемо отримати в результаті та символ, яким доповниться рядок, якщо це буде потрібно, четвертим параметром є буремний «прапор», чи додавати символи зліва або справа(за замовчуванням). Якщо 2 параметр менше, ніж довжина вихідного рядка, то виводимо вихідний рядок без змін. Приклад виклику: padString('Ivan', 6, '*') // 'Ivan**'.


function padString(str, length, symbol, toLeft){
    let newStr = str;
    
    if (length > str.length){
        if (toLeft != 'toLeft'){
            for (let i = 0; i < length - str.length; i++){
                newStr += symbol;
            } 
        } else {
            for (let i = 0; i < length - str.length; i++){
                newStr = symbol + newStr;
            }  
        }
    } else {}
    return newStr
}
console.log(padString('Ivan', 8, '*', 'toRight'))
console.log(padString('Ivan', 8, '*'))
console.log(padString('Ivan', 8, '*', 'toLeft'))

// Вам необхідно написати функцію camelCase(str, separator), яка приймає на вхід рядок і перетворює його до формату camelCase.

// function camelCase(str, separator){
//     let tr = str.toLowerCase().replaceAll(' ','');
//     return tr.replaceAll(str[separator], str[separator].toUpperCase());
//     }

function camelCase(str){
    let tr = str.toLowerCase().split(' ');
    let st = tr[0];
        for (let i = 0; i < tr.length; i++){
            st += st.replaceAll(tr[i], tr[i].toUpperCase())
        }
    return st
    }

console.log(camelCase('Ivan nerov'))


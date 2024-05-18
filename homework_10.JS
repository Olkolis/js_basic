// Завдання №1

const arr = [
    {source: 'book', text: 'lorem', date: '08.05.2017'},
    {source: 'journal', text: 'verdana', date: '03.09.2020'},
    {source: 'book', text: 'times new roman', date: '05.09.2027'},
    {source: 'journal', text: 'aleverda', date: '06.03.2023'},
    {source: 'radio', text: 'voice', date: '17.05.2024'},
];

const notifications = Object.groupBy(arr, item => item.source);

notifications[Symbol.iterator] = function() {
    const keys = Object.keys(this);
    let i = 0

    return {
        next() {
            if (i < keys.length){
                return {
                    value: keys[i++],
                    done: false
                };
            } else {
                return { done: true};
            }
        }
    }
}     

for (let sources of notifications) {
    console.log(sources);
}



// Завдання №2

const hypCollatz = (n) => n % 2 == 0 ? n / 2 : 3 * n + 1;

function memoize(fn) {
    let cache = new Map();
    // Завдання №3
    const uniqueCache = [...new Set(cache)];
    
    return (...args) => {
        let n = args[0];
        if (n in cache){
            return cache[n];
        } else {
            let result =  fn[n];
            cache[n] = result;
            return fn(...args);
        }
    }
}

const memoCollatz = memoize(hypCollatz);

console.log(memoCollatz(27));

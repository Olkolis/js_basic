const arr = [
    {source: 'book', text: 'lorem', date: 'p'},
    {source: 'journal', text: 'verdana', date: 'p'},
    {source: 'book', text: "times new roman", date: 'p'}
];

const newObject = Object.groupBy(arr, item => item.source);

console.log(newObject);
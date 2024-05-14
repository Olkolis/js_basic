const arrl = [
    {source: 'book', text: 'lorem', date: 'p'},
    {source: 'journal', text: 'verdana', date: 'p'},
    {source: 'book', text: 'times new roman', date: 'p'},
    {source: 'journal', text: 'aleverda', date: 'p'},
];

// const typeSource = [];

// function customGroup(groupBy){    
    
//   const result = array.filter((item) => {
//     return item.source.includes(groupBy);
//     });
      
//   const object = {
//     source: "",
//     array: [],
//   };
//   object.source = result[0].source;
//   result.forEach((item) => object.array.push(item));
//   typeSource.push(object);
// }
// customGroup('book');
// customGroup('journal');

// function returnMassive(massive) 
// {
// const types = massive.filter(item => item.source)

// types.forEach(source => groupMassive(source)) 
// }
// console.log(returnMassive(source))

function customGroup(array){
  const grouped = {};

  for (let i = 0; i < array.length; i++) {
  const item = array[i];
  const key = item.source;

  if (!grouped[key]) {
    grouped[key] = [];
  }
  grouped[key].push(item);
}
return grouped
}

console.log(customGroup(arrl));
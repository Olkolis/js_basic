const words = ["apple", "banaNA", "kiWi", "ORANGE"];

function capitalizeStrings(words){
    // let arr = [];
    // arr.pop();

    // for (let word of words) {
    //     arr += word.charAt(0).toUpperCase() + word.substr(1) + ",";
    //     arr = arr.split(",");
    // };
    // return arr;
    return words = words.map(elem => elem[0].toUpperCase() + elem.slice(1).toLowerCase());
}

console.log(capitalizeStrings(words)); // ["Apple", "Banana", "Kiwi", "Orange"]
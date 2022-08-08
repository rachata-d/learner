let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin]; 

// let result = arr.reduce(function(median, value){
//     return median / value;
// })

// console.log(result);

function getAverageAge(array) {
    let sumAge = array.reduce(function(acc,item){
    let age = item.age
    return acc+age        
    },0)
    let averageAge = sumAge / array.length
    return averageAge
}

getAverageAge(arr)
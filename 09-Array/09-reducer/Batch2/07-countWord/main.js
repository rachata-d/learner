let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];

let result = names.reduce(function(acc,item,index,array) {
    
    acc[item] = acc[item] ? acc[item] +1 : 1

    return acc

},{})
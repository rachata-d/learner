let arr = ['React', 'Vue', 'Angular'];
// let sorted = copySorted(arr);
function copySorted(array) {
    const clone = arr.slice(0)
    return clone.sort();
}

copySorted(arr)

let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];

  function flatArray(array) {

    let flattedArray = array.reduce((acc,item,index) => {

        acc.push(...item)
        return acc
    },[])

        return flattenArray


  }

  flatArray(flattened)
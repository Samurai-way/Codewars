let moveZeros = function (arr) {
    let zero = []
    let others = []
    let together = []
    
      for (let i =0; i <= arr.length-1; i++){
        if (arr[i] === 0){
          zero.push(arr[i])
          }
        else{ 
          others.push(arr[i])
        }
      }
    together = others.concat(zero)
    return together
  }
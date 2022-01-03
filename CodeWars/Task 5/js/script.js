const persistence=(num)=>{

    let splitNumArr=num.toString().split('')
    let newList
    let count=0
    while(splitNumArr.length>1){
  
       newList=splitNumArr.reduce((acc,curr)=>{
          return acc*=curr
       })
        splitNumArr=newList.toString().split('')
        count++
  
    }
  
  return count
  }
  
  
  
  console.log(persistence(39))===3
  console.log(persistence(999))===4
  console.log(persistence(9))===0
let determinant = m => 
  m.length == 1 ?
  m[0][0] :
  m.length == 2 ? 
  m[0][0]*m[1][1]-m[0][1]*m[1][0] :
  m[0].reduce((r,e,i) => 
    r+(-1)**(i+2)*e*determinant(m.slice(1).map(c => 
      c.filter((_,j) => i != j))),0)

let test1 = [[3]]                      
let test2 = [[3,-2],[7,4]]             
let test3 = [[1,3,7],[2,-1,4],[5,0,2]] 

console.log(determinant(test1))
console.log(determinant(test2))
console.log(determinant(test3))
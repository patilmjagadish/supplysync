let array=[1,2,3,4,5,1,2,3]
 
let unique=array.filter((ele,index,array)=>array.indexOf(ele)===index)
console.log(unique);
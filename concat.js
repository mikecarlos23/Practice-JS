function concat(array1,array2){
    let p=[]
  p.push(...array1)
  p.push(...array2)
  console.log( p)

}
concat(['a','b','c'],[1,2,3])
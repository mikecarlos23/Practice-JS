//Sum of list items using for loop

function forLoopsumOfListItems(list){
    let sum=0
for(let i=0;i<list.length;i++){
sum=sum+list[i]
}
console.log(sum)
}
forLoopsumOfListItems([1,2,3])

//Sum of list items using while loop

function whileLoopsumOfListItems(list){
    let sum=0
    let i=0
    while(i<list.length){
        sum=sum+list[i]
        i++
 }
console.log(sum)

}
whileLoopsumOfListItems([1,2])

//Sum of list items using Do while  loop
function doWhileLoopsumOfListItems(list){
    let sum=0
    let i=0
    do {
        sum=sum+list[i]  
        i++
      } while (i<list.length);
      console.log(sum)


}
doWhileLoopsumOfListItems([2,3,4])
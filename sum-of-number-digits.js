
function sumOfNumberDigits(value){
    let r=[]
    let k=[]
       let digit=value.toString()
    for(let i=0;i<digit.length;i++){
    r.push(digit[i])
    }
    for(let i=0;i<r.length;i++){
        k.push(parseInt(r[i]))
    }
   let p= k.reduce(function(sum,item){
sum=sum+item
return sum
    },0)
    return p
    }
    console.log(sumOfNumberDigits(237))

function NumberToList(value){
    let r=[]
       let digit=value.toString()
    for(let i=0;i<digit.length;i++){
    r.push( parseInt( digit[i]))
    }
    return r
    }
    console.log(NumberToList(2342))

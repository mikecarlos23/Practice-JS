let r=[]
for(let i=2;i<=1000;i++){
    for(let d=2;d<=1000;d++){
if(d!=i && i%d!=0){
    r.push(i)}
    if(r.length==988){
console.log(i)
r.length=0
    }
    else if(d!=i && i%d==0){
        r.length=0
        break
    }
    }}

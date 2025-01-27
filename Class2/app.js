const fs=require('fs')


let ans =fs.readFileSync('./test.txt','utf-8')
// console.log(ans)


fs.readFile('./test.txt','utf-8',(err,data)=>{


    if(err){
console.log(err)
    }
    else{
console.log(data)
    }
})

console.log('aman')
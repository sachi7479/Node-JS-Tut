console.log("start from here..")

setTimeout(()=>{
    console.log("in the middle")
},2000)

console.log('ending here')

let a = 10;
let b =0;

setTimeout(()=>{
b=10;
},2000)
console.log(a+b)

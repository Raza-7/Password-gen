function add(a,b){return a+b;}

let s=add(2,3);
console.log(s)

let add2= (c,d)=>{return c+d}
let s2= add2(3,4);
console.log(s2);

let isPos =(n) =>
{   if (n>0)
    return true
    else {return false} 
} 

isPos(3);
// console.log(num)

let randomNum = () =>{return Math.random}
randomNum();

document.addEventListener('click',function(){
    console.log(click)
})
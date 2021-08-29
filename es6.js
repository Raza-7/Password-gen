const alphabet= ["A" ,"B","C","D","E"];
const nums =["1","2","3","4"]

const a= alphabet[0];
console.log(a)
const [b,c, ...rest]= alphabet
console.log(rest)
console.log(c)
console.log(b)

 const newArr=[...alphabet,...nums]
 console.log(newArr)
 

 function sumMul(n1,n2){
     return [n1+n2, n2*n1]
 }
 const [sum,mul] = sumMul(10,5);
 console.log(sum);
 console.log(mul)

 const person={

    name:"saqib",age:19,
    address:{vill:"brelly", state:"UP"}
 }
 const {name, age,...rest}= person
 console.log(name)
 console.log(age)
 console.log(rest)
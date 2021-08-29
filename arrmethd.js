let animals = [
    {name:'tibber', type:'cat', isNeutered: 'true',age:'2' },
    {name:'fliffbal', type:'rabbit', isNeutered: 'false',age:'4' },
    {name:'strwhat', type:'cat', isNeutered: 'true',age:'6' },
    {name:'abc', type:'rabbit', isNeutered: 'true',age:'1' }

]
// for (let i=0;i<animals.length;i++){
//     let an=animals[i];
//     if(an.isNeutered)
//     {var n=neuteredAnimals.push(a);
//     console.log(n)
//     }
// }

// filter method
let filteredAnimals= animals.filter((a)=>{   
     return a.name;
    
 });
 console.log(filteredAnimals)


//map methods

// let animalName= animals.map(animal =>{
//     return animal.name;
// })
// console.log(animalName)

// document.write(animalName)

// let animalInfo= animals.map(animal=>{
//     return{name:animal.name, age:animal.age, species:animal.type};
// })
// console.log(animalInfo)
// document.write(animalInfo)
 

// everyy

let allAge= animals.every(animal=>{return animal.age})

console.log(allAge)
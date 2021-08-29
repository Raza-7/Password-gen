

console.log("this is async-awaite");
 async function users(){
     console.log("ïnside users")
     const res= await fetch("https://api.github.com/user");
     const users= await res.json();
    return "users";
}
let n= users();
console.log(n);
n.then(data => console.log(data));
class Human{
constructor(name,height,addrs){
    this.name=name;
    this.height=height;
    this.addrs=addrs;
}
goodGuy(){return `my height is ${this.height} inches `;}
}
let me = new Human('raza','5.8','cpf');
console.log(me.name)
console.log(me.goodGuy())
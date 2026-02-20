function Toffee(flavor,price,expiry){
    this.flavor=flavor;
    this.price=this.price;
    this.expiry=expiry;
}
let t1= new Toffee("vanilla",10,'2023-12-31');

class Toffee1{
    constructor(flavor, price, expiry) {
        this.flavor = flavor;
        this.price = price;
        this.expiry = expiry;  
    }

}
let t2=new Toffee1();
t2.flavor="chocolate";
t2.price=10;
t2.expiry="2023-12-31";
console.log(t2);


function Human(name,age,isHandsome){
    this.name=name;
    this.age=age;
    this.isHandsome=isHandsome;
}
Human.prototype.sayhello=function(){
    console.log("hello");
}
let h1=new Human('pranav',20,true);
h1.sayhello();
console.log(h1);
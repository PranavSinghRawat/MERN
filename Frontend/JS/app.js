// const prompt = require("prompt-sync")()
// const v= prompt("Enter Number: ");
// console.log(v);

//Arithmetic Operators
const x = 6
const y = "7"
const z = 12356
console.log(y + x);
console.log(z / x)
console.log(Number(y) + x);
console.log(Number(y) * x);
console.log(x + "");


//Comparison Operators
console.log("2" == 2);
console.log("2" === 2);

//Logical Operators
console.log("" || false);
console.log("hello" && true)

//Conditionals
if (true) {
    console.log("hello world");

} else if (false) {
    console.log("bye");

} else {
    console.log("error");

}

const cm=2<3?"true":"false"
console.log(cm);



const value=3
switch(value){
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("default");
        break;
}

const arr=[1,2,3,4,true]
const arr2=Array.from("hello")
console.log(arr2); 
//arrays function
console.log(arr.length);



let i = 0;
while (i < 5) {
    console.log(i);  
    i++;  
}

let j = 0;
do {
    console.log(j);  
    j++;
} while (j < 5);

for (let i = 0; i < 5; i++) {
    console.log(i); 
}




const user = {
    name: "YourName",
    age: 20,
    city: "Pune",
    skills: ["MERN", "DSA", "LeetCode"]
};


const student = new Object();
student.college = "Bharati Vidyapeeth";



const uniqueSkills = new Set();


const skills = new Set(["MERN", "DSA", "MERN", "LeetCode"]);
console.log(skills); 
skills.add("Spring Boot");  
skills.add("MERN");             
skills.delete("DSA");          
skills.clear();                 




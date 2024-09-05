// there are two main catogarization of datatypes
//#1 Primitive Datatypes

// there are 7 types of primitive datatypes: String, Number, Boolean, Null, Undefined, Symbol, BigInt

console.log("********")
console.log("String");
console.log("********")
let name="Jo"
console.log(name);
console.log(typeof name);

console.log("********")
console.log("Number");
console.log("********")
let score=100
console.log(score);
console.log(typeof score);

console.log("********")
console.log("Boolean");
console.log("********")
let AreYouGay=true
console.log('AreYouGay: ${AreYouGay}');
console.log(typeof AreYouGay);

/*console.log("Null");
console.log("********")
let OutsideTemp=Null
console.log(OutsideTemp);
console.log(typeof OutsideTemp);*/

console.log("********")
console.log("Undefined");
console.log("********")
let UserEmail;   //UserEmail=Undefined can also be written like this
console.log(UserEmail);
console.log(typeof UserEmail);

console.log("********")
console.log("BigInt");
console.log("********")
let pi=314159265359141592653591415926535914159265359n
console.log(pi);
console.log(typeof pi);

// #2 Reference Datatypes (Non Primitive)
// Array, Objects, Functions

console.log("********")
console.log("Array");
console.log("********")

const Herhoes=["shaktimaan", "nagraaj", "balweer", "lawdasur", "gandfaadman", "rakshachut"]
console.log(Herhoes);
console.log(typeof Herhoes);

console.log("********")
console.log("Objects");
console.log("********")

let myObj= {
    CallMe: "daddy",
    age: 69,
    money: "a lot"
}
console.log(myObj)

console.log("********")
console.log("Functions");
console.log("********")

let MyFunction = function(){
    console.log("Hello DADDY");
}
console.log(MyFunction);
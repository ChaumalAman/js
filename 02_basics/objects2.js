const obj =new Object()  // Singleton obj
obj.name="sam"
obj.isLoggedIn=false
obj.email="sam@google.com"

// console.log(obj);

const obj2={1:"a",2:"b"}
const obj3={3:"a",3:"b"}

// const obj4=Object.assign({},obj2,obj3)

const obj4 ={...obj2,...obj3}
// console.log(obj4);

// console.log(Object.keys(obj));

// console.log(obj.hasOwnProperty('isLoggedIn'))

const course={
    name:"js",
    price:"999",
    courseInstructor:"Hitesh"
}

const {courseInstructor : Inst} =course //destructuring of obj

console.log(Inst);


function user(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
    
}

user(course)


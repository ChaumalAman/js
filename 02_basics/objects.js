// singleton
// object.create

//object.literals
const mySym ="mykey"

const jsuser = {
    name : "Hitesh",
    "full name" : "Hitesh Chaudhary",
    email : "hitesh@googlr.com",
    [mySym] : "mykey1",
    age : 22,
    location : "Jaipur",
    isLoggedIn : false
}

console.log(jsuser.name);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);

jsuser.email = "hitesh@outlook.com"
console.log(jsuser["email"]);

// Object.freeze(jsuser) // cannot change value of object now
jsuser.email = "hitesh@microsoft.com"
console.log(jsuser["email"]);

jsuser.greeting = function(){
    console.log(`hello  ${this.name}`);
    
}
console.log(jsuser.greeting());






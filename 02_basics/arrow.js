const user ={
    name : "hitesh",
    price : 999,
    welcomeMessage:function (){
        console.log(`${this.name},welcome to website`);
        
    }
}
// user.welcomeMessage()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }

// chai()

// const addTwo =(num1,num2)=>{
//     return num1+num2
// }

// console.log(addTwo(5,6))

// const addTwo = (num1,num2) => (num1 +num2) // explicit return
// console.log(addTwo(5,6))

// IIFE
(function chai(){
    console.log("dbconnected");
    })();
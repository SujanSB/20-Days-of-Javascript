// const { func } = require("prop-types")

// console.log("to open any file in vs code using comand prompt code .");
// console.log("This keyword")

// console.log(this);

// function myfunction(){
//     console.log(this);
// }

// myfunction()

// const student ={
//     fname: "sujan",
//     lname:"bhattarai",
//     fullname:function(){
//         console.log(this.fname)
//         console.log(`My fullname is  ${this.fname} ${this.lname} `)
//     }
// }

// student.fullname()

// `` this is called as backtick
// fullname(){
//     console.log()
// } yesle kaam garnu parne haina ra?


// function User(name){
//     this.name =name;
//     console.log(this)

//     console.log(this.name)
// }
// console.log(typeof User)
// User("praman")

// const newUser = new User('sujan')

// console.log(typeof newUser)

// This refer to the current object declared inside the function 

// console.log("Arrow function + this keyword")


// const student ={
//     fname: "sujan",
//     lname:"bhattarai",
//     fullname:()=>{
            // console.log(this)
//         return (`My fullname is  ${fname} ${lname} `)
//     }
// }
// var result  = student.fullname()
// console.log(result)

// arrow function vaneko "()=>"

// arrow function always bind any object as global object

// console.log("arrow function")

// normal function 

// function myfunction(){
//     return `Namaste Sujan`
// }
// console.log(myfunction())

//  arrow function

// let myfunction = ()=>  'Namaste Sujan'
// console.log(myfunction())



// let value =(a,b) => `${a} + ${b}`

// console.log(value(2,3))
// var btn = document.getElementById('btn')
// btn.addEventListener('click',()=> console.log('hello guys'))

// console.log("higher order Array method")


// ForEach,Map,filter. etc
// Array

const Students =[
    {name:"Sujan",field:"comp",age:21},
    {name:"praman",field:"comp",age:29},
    {name:"Santosh",field:"civil",age:21},
    {name:"Shashank",field:"CRE",age:23},
   
]
const Roll =[66,34,45,65,88,89,34,45,67,32,34]


// for
// for(let i=0;i<Students.length;i++){
//     console.log(Students[i]);
// }
// console.log(Students[0].name)
// console.log(Students[0].field)
// console.log(Students[0].age)



// ForEach 

// Students.forEach(function(student){
//     console.log(student)
// })
// using arrow function
// Students.forEach((student)=>{console.log(student)})

// filter with arrow function

const Budo = Students.filter(age=> {if (age>25){console.log("budo vais bihe gar")}})

// const Budo = Students.filter(age=> age >=20 )

console.log(Budo)
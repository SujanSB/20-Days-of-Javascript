// const { func } = require("prop-types")

// console.log("to open any file in vs code using comand prompt code .");
// console.log("This keyword")

// console.log(this);

// function myfunction(){
//     console.log(this);
// }

// myfunction()
//Everything is object in JAVASCRIPT
// const student ={
//     fname: "sujan",
//     lname:"bhattarai",
//     fullname(){
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
// Students.forEach(student=>{console.log(student)})

// filter with arrow function


// console.log("day -3")

//  const budo = Students.filter(umer=> {if (umer.age>25){console.log("budo vais bihe gar",umer.name)}else{console.log("bacchai chhas",umer.name)}})
//  console.log(budo)
// const janne = Roll.filter(i=> i<=40 )
// const janne = Roll.filter(function(i){
//    return i<=40
// })
// arrow function vitra  3 ota kuraharu pass garna milxa arument,object,index
// console.log(janne)

// const arr1 = [1,2,3,4,]
// const arr2 = ["sujan","shashank"]
// arr2.concat(arr1)
// const combine = [...arr1,...arr2]






// console.log("map")

// const whichField = Students.map((manxe)=>{return `${manxe.name} of  ${manxe.field} field` });
// console.log(whichField)

// Ekdamai imp








// const RollSquare = Roll.map(i=> i*2)
// const RollDoublewithSquare = Roll.map(roll=> roll*2).map(roll=>roll*roll)

// console.log(RollDoublewithSquare)











// Console.log("Sort")
// const SortRoll = Roll.sort()//default accending order

// const SortRoll = Roll.sort((a,b)=> a-b)//decending order
// console.log(SortRoll)













// console.log('reduce')
// let RollSum = 0
// normal for loop ko through gara

// const rollSum = Roll.reduce((total,b)=> total +b,0);
// console.log(rollSum)






// -destructuring and Spread Operator two major things to be understand while learning React js 
// console.log("object destructuring")

// const address ={
//     street:"Devi prasad marga",
//     city:"ktm",
//     country:"Nepal"
// }

// const street = address.street;
// const city = address.city
// const country = address.country

// const {street,city,country}= address;  //ramro maninxa
// console.log(street)


// console.log("Spread Operator")

// const pahilo = ['ram','shyam',4]
// const dosro = [1,45,78]

// // const mileko = pahilo.concat(dosro)
// const mileko =[...dosro,...pahilo]
// console.log(mileko)

// console.log("day 3 finished")

// console.log("EXTRA ")

// let add = document.getElementById('badauna')
// let minus = document.getElementById('ghataune')
// let val = document.getElementById('number')

// let value = 0

// add.addEventListener('click',()=>{
//     value+=1;
//     val.innerHTML = value
// })
// minus.addEventListener('click',()=>{
//     value-=1;
//     val.innerHTML = value
// })









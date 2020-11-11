
// promise
// -reject 
// -resolve


// const probj1 = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         let roll_no =[1,2,3,4,5];
//         resolve(roll_no)
//         // reject('error aayo yrr brother')
//     },2000)
// })


// Thapa Technical

// probj1
// .then((nom)=>{
//     console.log(nom)
    
// })
// .catch((err)=>{
//     console.log(err)
// })


// async function getData(){
//     const data = await probj1;
//     console.log(data)
// }
// getData()


// Json -- Net ninja/code with with harry



// fetch('https://api.covid19api.com/summary')
// .then(responseData=>{
//     return responseData.json();
// })
// .then((data)=>{
//     // console.log(data)
//     // console.log(data.Countries)
//     console.log(data.Countries[120])
//     const Data = data.Countries[120]
//     document.getElementById("yaha").innerHTML=`${Data.Country} has ${Data.NewConfirmed} confirmed cases Today.`
// })
// .catch((err)=>{
//     console.log(err)
// })


// getData = async()=>{
//    const responseData= await fetch('https://api.covid19api.com/summary')
//    const data = await responseData.json();
//     const Data = data.Countries[120]
//     document.getElementById("yaha").innerHTML=`${Data.Country} has ${Data.NewConfirmed} confirmed cases Today.Total Case ${Data.TotalConfirmed}`


//    console.log(data)
// } 
// getData()




// Day 15 finished
let btn = document.querySelector('#btn')
let text =document.getElementById('text')

let num = [Math.floor(Math.random()*10)]

btn.addEventListener('click',function(e){
    e.preventDefault()
    let inval = document.getElementById('khalithau').value;
    if(inval == num){
        text.innerHTML=`correct answer your guess was ${num}`
    }else if(inval > num){
        text.innerHTML="Wrong answer,dgerai vayo"
    }
    else if(inval<num){
        text.innerHTML="Wrong answer,thorai vayo"
    }
    
}) 
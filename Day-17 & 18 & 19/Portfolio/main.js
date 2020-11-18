let aghillo = document.getElementById('aghillo')
    let yespaxi = document.getElementById('yespaxi')
    var ImageHaru = ['image/w4.png','image/w5.png','image/w6.jpg','image/w10.jpg',"https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"]
    var phuto =document.getElementById('photo')

    let i= 0;
    aghillo.addEventListener('click',()=>{
        i--;
        if(i<0){
            i=ImageHaru.length-1;
        }
        phuto.src=ImageHaru[i]
    })
    yespaxi.addEventListener('click',()=>{
        i++;
        if(i>ImageHaru.length-1){
            i= 0;
        }
        phuto.src=ImageHaru[i]

    })




    // contact section fill garera submit garepaxi

    let yeuta = document.querySelector('.yeuta')
    let name = document.querySelector('.name')
    let  email= document.querySelector('.email')
    let msgbox = document.querySelector('.msgbox')
    
    let btnid = document.getElementById('btnid')
    
    btnid.addEventListener('click',(e)=>{
        let ko = document.querySelector('.name').value
        e.preventDefault();
        if(name.value == '' || email.value =="" || msgbox ==""){
            alert('Criteria not fullfilled')
        }else{
            let newComp = document.createElement('p')
            newComp.innerHTML=`<h1>Form Submitted Successfully,<br/> <span>${ko}</span></h1>`
            yeuta.innerHTML= newComp.innerHTML
        }
    })
    
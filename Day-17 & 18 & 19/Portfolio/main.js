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

    
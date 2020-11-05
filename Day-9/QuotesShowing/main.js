const Quotes=[
    {
        "kvanyo":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi earum cum molestiae illo quisquam necessitatibus quod quas deserunt in error voluptas, dicta rerum, impedit id iure, consequuntur amet quidem! Vel?",
        'kaslevanyo':"Praman"
    },
    {
        "kvanyo":"Provident consectetur sequi vitae dolore dignissimos illum suscipit autem, tempore ullam eum temporibus voluptas quibusdam facere unde repudiandae libero reiciendis similique debitis incidunt sapiente. Fugit aut delectus quibusdam beatae est.",
        'kaslevanyo':"Santosh"
    },
    {
        "kvanyo":"Provident consectetur sequi vitae dolore dignissimos illum suscipit autem, tempore ullam eum temporibus voluptas quibusdam facere unde repudiandae libero reiciendis similique debitis incidunt sapiente. Fugit aut delectus quibusdam beatae est.",
        'kaslevanyo':"Sujan"
    
    },
    {
        "kvanyo":"Provident consectetur sequi vitae dolore dignissimos illum suscipit autem, tempore ullam eum temporibus voluptas quibusdam facere unde repudiandae libero reiciendis similique debitis incidunt sapiente. Fugit aut delectus quibusdam beatae est.",
        'kaslevanyo':"Shashank"
    },
    {
        "kvanyo":"Provident consectetur sequi vitae dolore dignissimos illum suscipit autem, tempore ullam eum temporibus voluptas quibusdam facere unde repudiandae libero reiciendis similique debitis incidunt sapiente. Fugit aut delectus quibusdam beatae est.",
        'kaslevanyo':"Dajai"
    },
    {
        "kvanyo":"Provident consectetur sequi vitae dolore dignissimos illum suscipit autem, tempore ullam eum temporibus voluptas quibusdam facere unde repudiandae libero reiciendis similique debitis incidunt sapiente. Fugit aut delectus quibusdam beatae est.",
        'kaslevanyo':"fatahDajai"
    },
]

var btn = document.getElementById('btn')
let kvanyo = document.getElementById('kvanyo')
let  kaslevanyo= document.getElementById('kaslevanyo')

btn.addEventListener('click',()=>{
    let i = Math.floor(Math.random()*Quotes.length)
    
    kvanyo.innerHTML =Quotes[i].kvanyo;;
    kaslevanyo.innerHTML =Quotes[i].kaslevanyo;

})

const hamburguer= document.querySelector('.hamburguer')
const menu= document.querySelector('.menu-navegacion')
//evento o metodo click, es decir mi escuchador 
hamburguer.addEventListener('click',()=>{

    menu.classList.toggle("spraed") //define velocidad del menu 

})
window.addEventListener('click',e=>{
    if(menu.classList.contains('spread')
    && e.target != menu && e.target != hamburguer
    ){
        
    }
} )
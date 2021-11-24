let menu = document.querySelector(".menu")
let burger = document.querySelector(".demo");
let button_contact = document.querySelector(".contact_button");
let div_contact = document.querySelector(".contact")
let header_ch = document.querySelector(".header_w_sc")
let ous = true
let body_effect = document.querySelector(".body_w_effect")
let incr = 1
let contact = document.querySelector(".contact_fo");
let containerr = document.querySelector(".container")
let effect_menu = document.querySelector(".effect_menu")
let popUPg = document.querySelector(".popup_garages")
let nosgbutt = document.querySelector(".ng_button")
let close_span = document.querySelector(".close_button")
contact.addEventListener("click",()=>{

    incr+=1
    if(incr%2==0)
    containerr.style.display="block"
    else{
    containerr.style.display="none"

    }
})
burger.addEventListener("click",()=>{
   effect_menu.classList.toggle("effect_menu_show")

    burger.classList.toggle("open")
    menu.classList.toggle("menu_shown")
    
    
})

window.addEventListener("scroll",()=>{

    console.log(window.scrollY)
    if(window.scrollY>0){
            header_ch.classList.add("header_scroll")
    }else{
        header_ch.classList.remove("header_scroll")

    }



})


button_contact.addEventListener("click",()=>{
    effect_menu.classList.toggle("effect_menu_show")
    burger.classList.remove("open")
    menu.classList.remove("menu_shown")
    
    if(containerr.style.display=="block"){
        location.href = "#container";

    }
    else{
    containerr.style.display="block"
    location.href = "#container";

    }


})
nosgbutt.addEventListener("click",()=>{
    effect_menu.classList.toggle("effect_menu_show")

    popUPg.classList.toggle("popup_garages_show")
})



close_span.addEventListener("click",()=>{
    effect_menu.classList.toggle("effect_menu_show")

    popUPg.classList.toggle("popup_garages_show")
})
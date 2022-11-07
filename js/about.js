
  // preload

  // let load=document.getElementById("preloaded");

  // window.addEventListener("load",function(){

  //   load.style.display="none";
  // })



// search
let icon=document.getElementById("search-icon");
let search= document.getElementById("search-box");
let close=document.getElementById("close");
close.addEventListener("click",function(){ 
  search.style.display="none";
})
icon.addEventListener("click",function(){
 
 search.style.display="block";

})


// cart 

let cartIcon=document.getElementById("basket-icon");
let cart=document.getElementById("cart");
let closes=document.getElementById("closes");


cartIcon.addEventListener("click",function(){ 
 cart.classList.add("c-active")
})

closes.addEventListener("click",function(){
cart.classList.remove("c-active")

})



// cart end
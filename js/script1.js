
// nav slides js
const swiper = new Swiper('.swiper', {
     autoplay:{
       delay:3000,
       disableonInteraction:false,
     },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });




  

  let load=document.getElementById("preloaded");

  window.addEventListener("load",function(){

       console.log("helo")
  })





// glider js




      
new Glider(document.querySelector('.glider'), {
  slidesToScroll: 1,
  slidesToShow: 5,
  draggable: true,
  
  arrows: {
    prev: '.glider-prev',
    next: '.glider-next'
  },

  responsive: [
  {
    // screens greater than >=1200px
    breakpoint: 1200,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 5,
      slidesToScroll: 2,
      itemWidth: 150,
      duration: 0.25
    }
  },{
    // screens greater than >= 900px
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
     
    }
  },

  {
    // screens greater than >= less then 640
    breakpoint: 640,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
     
    }
  },


  {
    // screens greater than >= 1024px
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
     
    }
  },
  
  {
    // screens greater than >= 1024px
    breakpoint: 380,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
     
    }
  },

  {
    // screens greater than >= 1024px
    breakpoint: 0,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
     
    }
  }
]
})





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


// let fullimgbox=document.getElementById("fullImgbox");
// let fullImg=document.getElementById("fullImg");
// let fullImg1=document.getElementById("fullImg1");
// let fullImg2=document.getElementById("fullImg2");


// .buy-buttons .fa-cart-shopping


let previwContainer=document.querySelector(".product-previw");
let previwBox=document.querySelectorAll(".priviw");


document.querySelectorAll(".shoping").forEach(function(product){
 
  
  product.addEventListener("click",function(){
    console.log("hello")
    previwContainer.style.display="flex";
   let name =product.getAttribute('data-name');


   previwBox.forEach(function(priviwe){

     let target= priviwe.getAttribute('data-target');
       if(name==target){

        priviwe.classList.add("active")
       }
   })
  })
})


previwBox.forEach(function(close){
 
  let closes= close.querySelector(".crose");
      closes.addEventListener("click",function(){
      
     close.classList.remove("active");
     previwContainer.style.display="none";


      })
});




let big1=document.getElementById("bigImg1");
let big2=document.getElementById("bigImg2");
let big3=document.getElementById("bigImg3");
let big4=document.getElementById("bigImg4");
let big5=document.getElementById("bigImg5");
let big6=document.getElementById("bigImg6");
let big7=document.getElementById("bigImg7");
function myFun(small){

   big1.src=small;
   big2.src=small;
   big3.src=small;
   big4.src=small;
   big5.src=small;
   big6.src=small;
   big7.src=small;
  
}



// END PRODUCT 1


const menu=[

  {
     id:1,
     tittle:"Product Name",
     category:"bestSaller",
     price:"$50.43",
     img:"https://source.unsplash.com/random/1600x900?smart-dress",
  },

  {
    id:4,
    tittle:"Product Name",
    category:"bestSaller",
    price:"$50.43",
    img:"https://source.unsplash.com/random/1600x900?super-dress",
 },

 {
  id:5,
  tittle:"Product Name",
     category:"bestSaller",
     price:"$50.43",
     img:"https://source.unsplash.com/random/1600x900?best-dress",
},

{
  id:6,
     tittle:"Product Name",
     category:"bestSaller",
     price:"$50.43",
     img:"https://source.unsplash.com/random/1600x900?danger-dress",
},


{
  id:7,
    tittle:"Product Name",
     category:"bestSaller",
     price:"$50.43",
     img:"https://source.unsplash.com/random/1600x900?orange-dress",
},

{
  id:8,
  tittle:"Product Name",
     category:"bestSaller",
     price:"$50.43",
     img:"https://source.unsplash.com/random/1600x900?grey-dress",
},

  {
    id:2,
    tittle:"Product Name",
    category:"trending",
    price:"$50.43",
    img:"https://source.unsplash.com/random/1600x900?dressmain",
 },


 {
  id:9,
  tittle:"Product Name",
    category:"trending",
    price:"$50.43",
    img:"https://source.unsplash.com/random/1600x900?beautifull-dress",

},


{
  id:10,
  tittle:"Product Name",
    category:"trending",
    price:"$50.43",
    img:"https://source.unsplash.com/random/1600x900?beautifull-cloth",
},

{
  id:11,
  tittle:"Product Name",
    category:"trending",
    price:"$50.43",
    img:"https://source.unsplash.com/random/1600x900?beautifullcloth",
},


{
  id:12,
  tittle:"Product Name",
    category:"trending",
    price:"$50.43",
    img:"https://source.unsplash.com/random/1600x900?queen-dress",
},



{
  id:13,
  tittle:"Product Name",
    category:"trending",
    price:"$50.43",
    img:"https://source.unsplash.com/random/1600x900?wow-dress",
},

{
  id:14,
  tittle:"Product Name",
    category:"trending",
    price:"$50.43",
    img:"https://source.unsplash.com/random/1600x900?dressup",
},


 {
  id:3,
  tittle:"Product Name",
  category:"speacialOffer",
  price:"$50.43",
  img:"model-dress",
},


{
  id:15,
  tittle:"Product Name",
  category:"speacialOffer",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?fashion-red",
},


{
  id:16,
  tittle:"Product Name",
  category:"speacialOffer",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?model-black",
},

{
  id:17,
  tittle:"Product Name",
  category:"speacialOffer",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?model-green",
},

{
  id:18,
  tittle:"Product Name",
  category:"speacialOffer",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?model-dresss",
},

{
  id:19,
  tittle:"Product Name",
  category:"speacialOffer",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?white-cloths",
},

{
  id:20,
  tittle:"Product Name",
  category:"speacialOffer",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?most-dresss",
},

{
  id:21,
  tittle:"Product Name",
  category:"speacialOffer",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?quality-dress",
},



{
  id:22,
  tittle:"Product Name",
  category:"speacialOffer",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?fashion-show",
},


{
  id:23,
  tittle:"Product Name",
  category:"newArrivalr",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?show-model",
},


{
  id:24,
  tittle:"Product Name",
  category:"newArrivalr",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?nature-model",
},


{
  id:25,
  tittle:"Product Name",
  category:"newArrivalr",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?sweet-model",
},



{
  id:26,
  tittle:"Product Name",
  category:"newArrivalr",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?cute-model",
},


{
  id:27,
  tittle:"Product Name",
  category:"newArrivalr",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?best-model",
},


{
  id:28,
  tittle:"Product Name",
  category:"newArrivalr",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?pink-drees",
},



{
  id:29,
  tittle:"Product Name",
  category:"newArrivalr",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?cloths",
},


{
  id:30,
  tittle:"Product Name",
  category:"newArrivalr",
  price:"$50.43",
  img:"icolor-dress",
},


{
  id:31,
  tittle:"Product Name",
  category:"newArrivalr",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?dress-code",
},


{
  id:32,
  tittle:"Product Name",
  category:"newArrivalr",
  price:"$50.43",
  img:"https://source.unsplash.com/random/1600x900?dress",
},

];




let sectionCenter=document.querySelector(".section-center");
let filterBtn=document.querySelectorAll(".menu-button");
let show=document.querySelector(".show");
let showOff=document.querySelector(".showOff");
 
// load item
window.addEventListener("DOMContentLoaded",function(){

 displaymenuItems(menu);
  
})

// filter btn

filterBtn.forEach(function(fBtn){
 
   
  fBtn.addEventListener("click",function(e){
    show.style.display="none";
    showOff.style.display="block";

    
     let category = e.currentTarget.dataset.id;
  
     let menuCategory=menu.filter(function(menuItem){
 
       
       if(menuItem.category===category){

           return menuItem;
       }

     })

     if(category==="All"){
  
      displaymenuItems(menu);
   
     }else{
      displaymenuItems(menuCategory);
     }
  })
  
})



function displaymenuItems(menuItem){
  let displayMenu=menuItem.map(function(item){
 
    return `    <div class="col-xl-3 col-md-4 col-6 menu-item  glider section-m1">
       
    <div class="card" style="width: 16rem;">
      <img src=${item.img} class="card-img-top" alt="${item.tittle}">

        


      <div class="product-details">
      
      <div class="buy-buttons">
      <i class="fa-regular fa-heart"></i>
      <i class="fa-solid fa-cart-shopping"></i>
      <div class="shoping" data-name="p-7">
       <abbr title="check">  <i class="fa-solid fa-magnifying-glass-plus"></i></abbr>
          </div>
    </div>

        <h4>${item.tittle}</h4>
        <div class="product-price">
           <div class="product-icon">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
           </div>
           <h5 class="price"> <p><b>${item.price}</b></p></h5>
        </div>
       </div>
    </div>
   </div>`;





  })
  displayMenu=displayMenu.join("");
  sectionCenter.innerHTML= displayMenu;
}



function defultDisplay(){

  show.style.display="block";
    showOff.style.display="none";
   
}










// for second glider





      
new Glider(document.querySelector('.raj'), {
  slidesToScroll: 1,
  slidesToShow: 5,
  draggable: true,
  
  arrows: {
    prev: '.raj-prev',
    next: '.raj-next'
  },

  responsive: [
  {
    // screens greater than >=1200px
    breakpoint: 1200,
    settings: {
      // Set to `auto` and provide item width to adjust to viewport
      slidesToShow: 5,
      slidesToScroll: 1,
      itemWidth: 150,
      duration: 0.25
    }
  },{
    // screens greater than >= 900px
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
     
    }
  },

  {
    // screens greater than >= less then 640
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
     
    }
  },


  {
    // screens greater than >= 1024px
    breakpoint: 500,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
     
    }
  },

  {
    // screens greater than >= 1024px
    breakpoint: 450,
    settings: {
      slidesToShow:1,
      slidesToScroll: 1,
     
    }
  },

  // {
  //   // screens greater than >= 1024px
  //   breakpoint: 0,
  //   settings: {
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
     
  //   }
  // }
]
})
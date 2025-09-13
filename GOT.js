// locomotive 

const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});





// gsap



var loader = document.getElementsByClassName("preloader")[0];

window.addEventListener("load",function(){
    loader.style.display = "none";
})


var main = gsap.timeline();
   main.from('.main',{
    //   transform:translateX("200%"),   
      opacity:0,
      duration:3,
      delay:0.7,
   })

  main.from('.main .page1 h1',{
    z:150,
    opacity:0,
    // x:10,
    y:10,
    duration:2,
    stagger:0.5,
  }) 

  main.from(".main .nav img",{
    opacity:0,
    y:10,
    duration:0,
  })

var bravo = gsap.timeline();

bravo.to(".menu",{
    right:0,
    duration:0.8
})

bravo.from(".menu h4",{
    x:150,
    duration:1,
    opacity:0,
    stagger:0.3
})

bravo.pause()

  var A = document.querySelector(".main .nav i")

  var B = document.querySelector(".main .nav .menu img")

A.addEventListener("click",function(){
  bravo.play();
})

B.addEventListener("click",function(){
  bravo.reverse()
})


const audio = document.getElementById("audio")

document.addEventListener("click",()=>{
  audio.play();
},{once:true})


// page 2 animation..


var page2 = gsap.timeline();
 page2.from(".page2 .mambers",{
    x:-40,
    delay:1,
    duration:2,
    opacity:0,
    stagger:1,
 })

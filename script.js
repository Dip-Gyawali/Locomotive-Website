const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});

let main = document.querySelector('#main');

main.addEventListener("mousemove",function(dets){
   gsap.to(".cursor",{
       x:dets.x,
       y:dets.y,
       duration:1,
       ease: "back.out(1.7)"
   })
})
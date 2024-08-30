gsap.from("#page1 #box",{
  scale:0,
  delay:1,
  duration:2,
  rotate:360
})

gsap.from("#page2 #box",{
  scale:0,
  duration:2,
  rotate:720,
  // scrollTrigger:"#page2 #box"  
  //this helps to create animation when the screen is scrolled 
  //this can be also written in the detail form by creating object- given below 

  scrollTrigger:{
    trigger:"#page2 #box",
    scroller:"body",
    markers:true,
    start:"top 60%", // delay command is removed while using this 
    end: "top 30%",
    scrub: 2 
  }
})
gsap.from("#page3 #box",{
  scale:0,
  delay:1,
  duration:2,
  rotate:60,
  scrollTrigger:"#page3 #box"
})
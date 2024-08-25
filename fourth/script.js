gsap.to("#box", {
  x:1000,
  duration: 2,
  delay:1,
  rotate:180,
  backgroundColor:"pink",
  borderRadius:"50%",
  scale:0.2,
  repeat:-1, //-1 as it will then mve infinite times
  yoyo:true
})
gsap.from("#box2",{
  x:1000,
  duration:2,
  delay:1,
  rotate:360,
  backgroundColor:"orange",
  borderRadius:"50%",
  repeat:-1,
  yoyo:true
})
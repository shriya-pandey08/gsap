gsap.to("#box", {
  x:1000,
  duration: 2,
  delay:1,
  rotate:180,
  backgroundColor:"pink",
  borderRadius:"50%",
  scale:0.2
})
gsap.from("#box2",{
  x:1000,
  duration:2,
  delay:1,
  rotate:360,
  backgroundColor:"orange",
  borderRadius:"50%"
})
gsap.to("#box", {
  x:1000,
  duration: 1,
  delay:1.5,
  rotate:360,
  backgroundColor:"pink"
})
// from is used to move animation from final to initial
gsap.from("#box2",{
  x:1000,
  duration:1.5,
  delay:2.5,
  rotate:360,
  backgroundColor:"orange",
})
// to is used to move animation from initial to final
gsap.to("#box3",{
  x:1000,
  duration:2.5,
  delay:4,
  rotate:360,
  backgroundColor:"green"
})

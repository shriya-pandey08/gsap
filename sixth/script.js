var tl=gsap.timeline()

tl.to("#box", {
  x:1000,
  duration: 2,
  delay:1,
  rotate:360,
  backgroundColor:"pink"
})
// from is used to move animation from final to initial
tl.from("#box2",{
  x:1000,
  duration:2,
  delay:1,
  rotate:360,
  backgroundColor:"orange",
})
// to is used to move animation from initial to final
tl.to("#box3",{
  x:1000,
  duration:2,
  delay:1,
  rotate:360,
  backgroundColor:"green"
})

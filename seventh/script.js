var tl=gsap.timeline()

tl.from("h2",{
  y:-30,
  opacity:0,
  duration:1,
  delay:0.5
})
// from is used to move animation from final to initial
tl.from("h4",{
  y:-30,
  opacity:0,
  duration:1,
  delay:0.5,
  stagger:0.3
})
// to is used to move animation from initial to final
t1.from("h1",{
  y:20,
  opacity:0,
  duration:1,
  scale:0.2
})
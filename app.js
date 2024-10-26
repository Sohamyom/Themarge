const tl = gsap.timeline()

tl.from('#box', {
  opacity: 0,
  height: 0,
  duration: 2,
  delay: .3,
})

tl.from('#landpage-tytle', {
  opacity: 0,
  y: 80,
  duration: 1.2,
  
})

tl.from('#dot', {
  opacity: 0,
  scale: 0,
  duration: 0.5,
  stagger: 0.2,
})

tl.to('#glass', {
  height: '30vh',
  duration: 1,
  scrollTrigger: {
    trigger: '#glass',
    start: 'top 10%',
    end: 'bottom 70%',
    scrub: true,
  }
})

gsap.from('#v-1,#v-2,#v-3',{
  opacity: 0,
  y: 80,
  duration: 1.5,
  stagger: 0.5,
  scrollTrigger: {
    trigger: '#v-1,#v-2,#v-3',
    start: 'top 90%',
    end: 'bottom 30%',
  }
})
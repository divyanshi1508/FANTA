var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    markers: true,
}})

tl.to("#fanta",{
    top: "120%",
    left: "3.5%"
},'orange')
tl.to("#orange-cut",{
    top: "160%",
    left: "23%"
},'orange')
tl.to("#orange",{
    top: "180%",
    left: "80%"
},'orange')
tl.to("#leaf3",{
    top: "110%",
    rotate: "210deg",
    left: "80%"
},'orange')
tl.to("#leaf1",{
    top: "110%",
    rotate: "130deg",
    left: "0%"
},'orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    left: "-31%",
    top: "110%"
})
tl2.from("#coc",{
    rotate: "-90deg",
    left: "-20%",
    top: "110%"
})

gsap.to(".under_color", {
    height: "100%",
    width: "100%",
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0",
    boxShadow: "0px 0.3px 1px 0px #fff",
    scrollTrigger: {
        trigger: ".under_color",
        scroller: "body",
        // markers: true,
        start: "top -5%",
        end: "top -6%",
        scrub: 1
    }
})
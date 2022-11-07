function show() {
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
       el: document.querySelector("#bg"),
       smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#bg", {
       scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
       },
       getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
       },
       pinType: document.querySelector("#bg").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
 }
 
 show();
 //landing pge
 var c = 0;
 var arr = [{ bg: "black", cl: "aliceblue",dis:"visible" },
 { bg: "rgb(212, 106, 143)", cl: "black" ,dis:"visible" },
 { bg: "black", cl: "aliceblue" ,dis:"visible" },
 { bg: "rgb(212, 106, 143)", cl: "black",dis:"hidden" }]
 
 var b = setInterval(function () {
    if(c<5){
    document.querySelector("#lndpge").style.backgroundColor = `${arr[c].bg}`;
    document.querySelector("#lndpge .clm").style.color = `${arr[c].cl}`;
    document.querySelector("#lndpge #line").style.backgroundColor = `${arr[c].cl}`;
    document.querySelector("#lndpge .clms").style.color = `${arr[c].cl}`;
    document.querySelector("#lndpge").style.visibility=`${arr[c].dis}`;
    c++;}
    else{
       
    }
 }, 400)
 
 
 //main anime
 gsap.from("#main #m1 #text #txt #l1",{
    width:0,
    delay:1.5,
    onStart: function () {
       $('#main #m1 #text #txt #t2').textillate({ in: { effect: 'swing'}})
    }
 })
 gsap.from("#main #m1 #text #txt1 #l1",{
    width:0,
    delay:1.5,
    onStart: function () {
       $('#main #m1 #text #txt1 #t2').textillate({ in: { effect: 'swing' } });
    }
 })
 
 var tl=gsap.timeline();
 tl.to("#main #m1 #box",{
    y:-1000,
    scrollTrigger: {
       trigger: "#main #m1",
       scroller: "#bg",
       start: "top -2%",
       end: "+=" + (window.innerHeight),
       scrub: 1,
       anticipatePin: true
   }
 })
 tl.to("#main #m1 #box1",{
    y:-1000,
    
    scrollTrigger: {
       trigger: "#main #m1",
       scroller: "#bg",
       start: "top -5%",
       end: "+=" + (window.innerHeight),
       scrub: 1,
       anticipatePin: true
   }
 })
 tl.to("#main #m1 #box2",{
    y:-1100,
    scrollTrigger: {
       trigger: "#main #m1",
       scroller: "#bg",
       start: "0",
       end: "+=" + (window.innerHeight),
       scrub: 1,
       anticipatePin: true
   }
 })
 tl.from("#main #m2 #crd2",{
    rotation:25,
    scrollTrigger: {
       trigger: "#main #m2 #crd2",
       scroller: "#bg",
       start: "top 150%",
       end: "top 110%",
       anticipatePin: true,
       scrub: true
   }
 })
 tl.from("#main #m2 #crd1",{
    rotation:-25,
    scrollTrigger: {
       trigger: "#main #m2 #crd2",
       scroller: "#bg",
       start: "top 150%",
       end: "top 110%",
       anticipatePin: true,
       scrub: true
   }
 })
 
 //notification event 
 var hj=gsap.timeline({
    repeat:-1
 })
 hj.to("#main #m1 .evnthdr",{
    x:-3072,duration:15,delay:1,ease:Linear.easeNone,
 
 });
 
 
 //shw hide window
 function win(main,inside,cross,dis){
    var w=0;
    var z=9;
 document.querySelector(main).addEventListener("click",function(){
    if(w===0){
    document.querySelector(inside).style.display=dis;
    document.querySelector(inside).style.zIndex=`${z++}`;
    w=1;
 }
 else{
    document.querySelector(inside).style.display="none";
    w=0;
 } 
 })
 document.querySelector(cross).addEventListener("click",function(){
    document.querySelector(inside).style.display="none";
    document.querySelector(inside).style.zIndex="20";
    w=0;
 })
 }
 win("#top-fix #window1 #sgn","#top-fix .pges","#top-fix .pges #im2","flex");
 win("#top-fix #window1 #lgn","#top-fix .pges1","#top-fix .pges1 #im2","flex");
 win("#top-fix #dep","#top-fix #window1",null,"inline-block");
 

 
 
 
 
 
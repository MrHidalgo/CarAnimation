// VARIABLE CAR
// ====================
var car0 = document.getElementById("car-0"),
  car1 = document.getElementById("car-1"),
  car2 = document.getElementById("car-2"),
  car3 = document.getElementById("car-3");

// VARIABLE FIGURE
// ====================
var figure0 = document.getElementById("figure-0"),
  figure1 = document.getElementById("figure-1"),
  figure2 = document.getElementById("figure-2"),
  figure3 = document.getElementById("figure-3"),
  figure4 = document.getElementById("figure-4");

// VARIABLE COINS
// ====================
var coins0 = document.getElementById("coins-0"),
  coins1 = document.getElementById("coins-1"),
  coins2 = document.getElementById("coins-2"),
  coins3 = document.getElementById("coins-3"),
  coins4 = document.getElementById("coins-4");

// Create a timeline & morph
// ====================
var tl = new TimelineMax(),
  arrow0 = MorphSVGPlugin.pathDataToBezier("#arrow-0", {align:"#car-0", offsetX: -20, offsetY: -17}),
  arrow1 = MorphSVGPlugin.pathDataToBezier("#arrow-1", {align:"#car-1", offsetX: 0, offsetY: -17}),
  arrow2 = MorphSVGPlugin.pathDataToBezier("#arrow-2", {align:"#car-2", offsetX: -22, offsetY: -15}),
  arrow3 = MorphSVGPlugin.pathDataToBezier("#arrow-3", {align:"#car-3", offsetX: 0, offsetY: -17});

// Main opt
// ====================
tl.set([coins0, coins1, coins2, coins3, coins4, figure0, figure1, figure2, figure3, figure4], {
  transformOrigin: 'center'
});

tl.set([coins0, coins1, coins2, coins3, coins4], {
  scale: 0
});


// Animate
// ====================
tl
  .to([coins0, figure0], 0.35, {opacity:1, scale: 1.25, ease: Power1.easeOut})
  .to([coins0, figure0], 0.2, {scale: 1})

  .to(car0, 0.3, {opacity:1}, "+=0.05")
  .from(car0, 1, {bezier:{values:arrow0, type:"cubic", autoRotate:true}, ease: Power1.easeOut})
  .to(car0, 0.3,{opacity:0})

  .to([coins1, figure1], 0.35, {opacity:1, scale: 1.25, ease: Power1.easeOut}, "+=0.05")
  .to([coins1, figure1], 0.2, {scale: 1})

  .to(car1, 0.3, {opacity:1}, "+=0.1")
  .to(car1, 1, {bezier:{values:arrow1, type:"cubic", autoRotate:true}, ease: Power1.easeOut})
  .to(car1, 0.3,{opacity:0}, "-=0.3")

  .to([coins2, figure2], 0.35, {opacity:1, scale: 1.25, ease: Power1.easeOut}, "+=0.05")
  .to([coins2, figure2], 0.2, {scale: 1})

  .to(car2, 0.35, {opacity:1}, "-=0.05")
  .to(car2, 2.2, {bezier:{values:arrow2, type:"cubic", autoRotate: -90}, ease: Power0.easeInOut}, "-=0.4")
  .to(car2, 0.35,{opacity:0})

  .to([coins3, figure3], 0.35, {opacity:1, scale: 1.25, ease: Power1.easeOut}, "+=0.05")
  .to([coins3, figure3], 0.2, {scale: 1})

  .to(car3, 0.35, {opacity:1}, "+=0.05")
  .to(car3, 1, {bezier:{values:arrow3, type:"cubic", autoRotate: true}, ease: Power1.easeOut})
  .to(car3, 0.35,{opacity:0}, "-=0.3")

  .to([coins4, figure4], 0.35, {opacity:1, scale: 1.25, ease: Power1.easeOut}, "+=0.05")
  .to([coins4, figure4], 0.2, {scale: 1});

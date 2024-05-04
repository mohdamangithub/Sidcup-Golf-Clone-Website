var cursor = document.querySelector("#cursor");
var cursor_blur = document.querySelector("#cursor-blur");
var anker = document.querySelectorAll("a");
var dot1 = document.querySelector("#dot1");
var dot2 = document.querySelector("#dot2");
var dot3 = document.querySelector("#dot3");
var dot_in_1 = document.querySelector("#dot-in-1");
var dot_in_2 = document.querySelector("#dot-in-2");
var dot_in_3 = document.querySelector("#dot-in-3");
var left_img = document.querySelector("#left-img");

// console.log(dot)
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursor_blur.style.left = dets.x - 250 + "px";
  cursor_blur.style.top = dets.y - 250 + "px";
});
// console.log(anker)
// anker.addEventListener("mousemove", function(){})
anker.forEach(function (val) {
  // console.log(val);
  val.addEventListener("mousemove", function () {
    cursor.style.scale = "3";
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "transparent";
  });
  val.addEventListener("mouseout", function () {
    cursor.style.scale = "1";
    cursor.style.border = "0px solid #95c11e";
    cursor.style.backgroundColor = "#95c11e";
  });
});

dot1.addEventListener("click", function () {
  dot_in_1.style.backgroundColor = "#95c11e";
  dot1.style.border = " 3px solid #95c11e";
  dot2.style.border = "none";
  dot3.style.border = " none";
  dot_in_2.style.backgroundColor = "#fff";
  dot_in_3.style.backgroundColor = "#fff";
  left_img.style.backgroundImage =
    "url(https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/hero-5.jpg?strip=all&lossy=1&sharp=1&ssl=1)";
});
dot2.addEventListener("click", function () {
  dot_in_2.style.backgroundColor = "#95c11e";
  dot2.style.border = " 3px solid #95c11e";
  dot1.style.border = "none";
  dot3.style.border = " none";
  dot_in_1.style.backgroundColor = "#fff";
  dot_in_3.style.backgroundColor = "#fff";
  left_img.style.backgroundImage =
    "url(https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-menu.jpg?strip=all&lossy=1&sharp=1&ssl=1)";
});
dot3.addEventListener("click", function () {
  dot_in_3.style.backgroundColor = "#95c11e";
  dot3.style.border = " 3px solid #95c11e";
  dot1.style.border = "none";
  dot2.style.border = " none";
  dot_in_1.style.backgroundColor = "#fff";
  dot_in_2.style.backgroundColor = "#fff";
  left_img.style.backgroundImage =
    "url(https://eiwgew27fhz.exactdn.com/wp-content/uploads/2023/02/cafe-about-1.jpg?strip=all&lossy=1&sharp=1&ssl=1)";
});
gsap.to("#nav", {
  backgroundColor: "#000",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
  },
});
gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});
gsap.from("#about-us img, #about-us-in", {
  y: 50,
  opacity: 0,
  duration: 1,
  // stagger: 0.4,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from(".card", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#left-img, #right-txt", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: "#page2-1",
    scroller: "body",
    // markers: true,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    // markers: true,
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 80%",
    scrub: 4,
  },
});
gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 90%",
    end: "top 70%",
    scrub: 3,
  },
});

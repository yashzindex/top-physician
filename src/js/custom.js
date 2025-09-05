$(document).ready(function () {
  // Menu Button
  let menu = $("#menu-toggle");
  let navMenu = $("#nav-menu");

  menu.click(function () {
    $(this).toggleClass("open");
    $(navMenu).toggleClass("leftZero");
  });

  // animations
  //   gsap.registerPlugin(ScrollTrigger);

  //   ScrollTrigger.batch(".fade-in", {
  //     onEnter: (batch) => {
  //       gsap.to(batch, {
  //         opacity: 1,
  //         y: 0,
  //         filter: "blur(0px)",
  //         duration: 0.8,
  //         ease: "power2.out",
  //         stagger: 0.2,
  //       });
  //     },
  //     start: "top 80%",
  //     once: true,
  //   });

  //   ScrollTrigger.batch(".fade-banner-image", {
  //     onEnter: (batch) => {
  //       gsap.to(batch, {
  //         opacity: 1,
  //         filter: "blur(0px)",
  //         // transform: " translateZ(10px)",
  //         duration: 0.9,
  //         ease: "power2.out",
  //         stagger: 1,
  //         delay:0.7,
  //       });
  //     },
  //     start: "top 80%",
  //     once: true,
  //   });

  //   ScrollTrigger.batch(".fade-only", {
  //     onEnter: (batch) => {
  //       gsap.to(batch, {
  //         opacity: 1,
  //         duration: 2,
  //         ease: "power2.out",
  //         stagger: 0.7,
  //       });
  //     },
  //     start: "top 80%",
  //     once: true,
  //   });

  //   ScrollTrigger.batch(".blur-only", {
  //     onEnter: (batch) => {
  //       gsap.to(batch, {
  //         opacity: 1,
  //         filter: "blur(0px)",
  //         duration: 0.8,
  //         ease: "power2.out",
  //         stagger: 0.7,
  //       });
  //     },
  //     start: "top 80%",
  //     once: true,
  //   });
});

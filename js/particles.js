  particlesJS("particles-js", {
    particles: {
      number: { value: 10 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      size: { value: 3, random: true },
      move: { enable: true, speed: 2 },
      line_linked: { enable: true, color: "#ffffff" },
    },
    interactivity: {
      events: { onhover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 100, line_linked: { opacity: 1 } } },
    },
    retina_detect: true,
  });
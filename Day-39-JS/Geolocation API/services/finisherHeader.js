new FinisherHeader({
  count: 6,
  size: {
    min: 1300,
    max: 1500,
    pulse: 0,
  },
  speed: {
    x: {
      min: 0.8,
      max: 3,
    },
    y: {
      min: 0.8,
      max: 3,
    },
  },
  colors: {
    background: "#953eff",
    particles: ["#ff681c", "#87ddfe", "#231efe", "#ff0a53"],
  },
  blending: "lighten",
  opacity: {
    center: 0.5,
    edge: 0,
  },
  skew: 0,
  shapes: ["c"],
});

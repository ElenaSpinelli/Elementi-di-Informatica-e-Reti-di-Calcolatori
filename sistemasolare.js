var stato = 0;
var tween = TweenMax.to("#q", 2, {
  rotation: "+=360", ease:Linear.easeNone,
  repeat: -1});

var tween = TweenMax.to("#p", 5, {
  rotation: "-=360", ease:Linear.easeNone,
  repeat: -1});

$("#clikv").on("click", () => {
 TweenMax.to("#q", 5, {
  rotation: "-=360", ease:Linear.easeNone,
  repeat: -1});
})

$("#clikm").on("click", () => {
 TweenMax.to("#p", 2, {
  rotation: "+=360", ease:Linear.easeNone,
  repeat: -1});
})

$("#cliks").on("click", () => {
 TweenMax.to("#s", 3,{css:{opacity:100}, ease:Quad.easeInOut});
})

//GSAP
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenMax.min.js"></script>

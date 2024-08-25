// let flag = 0;

// function changeImage(x) {
//   flag = flag + x;
// slideshow(flag);

// }

// function slideshow(num) {
//   let slides = document.getElementsByClassName("slide");
//   console.log(slides);
//   for(let y of slides){
//     y.style.display = "none";
//   }

//   slides[num].style.display = "block";
// }

// slideshow(flag);

let variable = 0;
function slideshow(recv) {
  let slides = document.getElementsByClassName("slide");
  slides[recv].style.display = "block";
}
slideshow(variable);

function changeImage(w) {
  d = variable + 1;
  slideshow(d);
}

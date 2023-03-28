// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
//     //show the div that tn indicates, makes use of the function below. BUT THIS IS STILL A NORMAL PAGE WITH THE IMAGE STACKED BELOW EACH OTHER 
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);

// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("preview");
//     //gets all div elements by taking all elements with the preview class

//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     if (slideIndex > slides.length) { slideIndex = 1 }

//     slides[slideIndex - 1].style.display = "block";
// }




//var p02_active = p02.getElementsByClassName("active");

//look at this with another view later


// let p02 = document.getElementById("project_02_preview");
// console.log(p02);


/////////////////////////////////// functions for the change of the text


let p02 = null;
let p03 = null;
let peco = null;
let pbap = null;
let paoi = null;
let psks = null;
let projects_nav = null;

document.addEventListener("DOMContentLoaded", function () {

  projects_nav = document.getElementById("projects_nav_button");
  p02 = document.getElementById("project_02_preview");
  p03 = document.getElementById("project_03_preview");
  peco = document.getElementById("TUecomotive_preview");
  pbap = document.getElementById("project_bits_and_pieces_preview");
  paoi = document.getElementById("aesthetics_of_interaction_preview");
  psks = document.getElementById("skadiskaduskala_preview");
  //console.log(p02_class);

});

window.onload = function () {
  // makes sure the button also changes text on page loaded
  changeprojectbuttontext();
};

function changeprojectbuttontext() {

  var p02_class = p02.getElementsByClassName("preview active");
  var p03_class = p03.getElementsByClassName("preview active");
  var peco_class = peco.getElementsByClassName("preview active");
  var pbap_class = pbap.getElementsByClassName("preview active");
  var paoi_class = paoi.getElementsByClassName("preview active");
  var psks_class = psks.getElementsByClassName("preview active");


  if (p02_class.length > 0) {
    projects_nav.textContent = "Project 02";
    projects_nav.href = "/project_02.html";
  }

  if (p03_class.length > 0) {
    projects_nav.textContent = "Project 03";
    projects_nav.href = "/project_03.html";
  }



  if (peco_class.length > 0) {
    projects_nav.textContent = "TUecomotive";
    projects_nav.href = "/TUecomotive.html";
  }



  if (pbap_class.length > 0) {
    projects_nav.textContent = "Project Bits and pieces";
    projects_nav.href = "/project_bits_and_pieces.html";
  }



  if (paoi_class.length > 0) {
    projects_nav.textContent = "Aesthetics of interaction";
    projects_nav.href = "/aesthetics_of_interaction.html";
  }

  if (psks_class.length > 0) {
    projects_nav.textContent = "skadiskaduskala";
    projects_nav.href = "/skadiskaduskala.html";
  }




}

////////////////////////////////// changing the slides 


let slideIndex = 1;
showSlides(slideIndex);

function minusSlides(n) {
  showSlides(slideIndex -= n);
  changeprojectbuttontext();
}

function plusSlides(n) {
  showSlides(slideIndex += n);
  changeprojectbuttontext();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("preview");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].className = slides[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].className += " active";
}







// let slideIndex = 0;
// showSlides();

// // Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// // Automatic slideshow
// setInterval(() => {
//     slideIndex++;
//     showSlides();
// }, 5000);

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("preview");

//     if (slideIndex >= slides.length) {
//         slideIndex = 0;
//     }

//     if (slideIndex < 0) {
//         slideIndex = slides.length - 1;
//     }

//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     slides[slideIndex].style.display = "block";
// }

// const projectLinks = document.querySelectorAll('.project-link');
// const imageContainer = document.getElementById('image-container');




// let activeImageIndex = 0;
// const images = document.querySelectorAll('.preview');

// function changeImage() {
//     activeImageIndex = (activeImageIndex + 1) % images.length;
//     images.forEach((image, index) => {
//         image.classList.toggle('active', index === activeImageIndex);
//     });
// }

// var previews = getElementsByClassName("preview");
// var triangle = getElementByClassname("triangle");

// for (var i = 0; i < previews.length; i++) {
//     previews[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//     });
// } 
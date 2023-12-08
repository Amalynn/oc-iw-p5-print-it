const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let arrowLeft = document.querySelector(".arrow_left") ;
let arrowRight = document.querySelector(".arrow_right") ;
let dots = document.querySelector(".dots") ;
let p = document.querySelector("#banner p");
let bannerImg = document.querySelector('#banner .banner-img');

let pathSlideshowImages = "./assets/images/slideshow/" ;

// Création des bullets points
for(let i = 0; i < slides.length; i++) {
	let span = document.createElement("span");
	span.classList.add("dot");
	dots.appendChild(span);
}

// Etat initial - Premier dot sélectionné
let slideIndex = 0;

let listeDotSpan = document.querySelectorAll(".dot");
listeDotSpan[slideIndex].classList.add("dot_selected");


// Modification du slide au clic sur le bouton gauche
arrowLeft.addEventListener("click", () => {
	listeDotSpan[slideIndex].classList.remove("dot_selected");

	slideIndex-- ;

	if(slideIndex < 1) {
		slideIndex = slides.length - 1;
	}

	// On change le bullet point actif au suivant	 
	listeDotSpan[slideIndex].classList.add("dot_selected");

	// Mise à jour de l'image et du texte du slider
	let slidesTextContent = slides[slideIndex].tagLine ;
	let pathSlidesImage = pathSlideshowImages + slides[slideIndex].image  ;

	p.innerHTML = slidesTextContent ;
	bannerImg.src = pathSlidesImage;
})

// Modification du slide au clique sur le bouton droit
arrowRight.addEventListener("click", () => {
	listeDotSpan[slideIndex].classList.remove("dot_selected");
		
	slideIndex++ ;		

	if(slideIndex > slides.length - 1) {
		slideIndex = 0;
	}
	
	// On change le bullet point actif au suivant	 
	listeDotSpan[slideIndex].classList.add("dot_selected");

	// Mise à jour de l'image et du texte du slider
	let slidesTextContent = slides[slideIndex].tagLine ;
	let pathSlidesImage = pathSlideshowImages + slides[slideIndex].image  ;

	p.innerHTML = slidesTextContent ;
	bannerImg.src = pathSlidesImage;
})
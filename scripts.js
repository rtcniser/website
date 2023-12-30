// console.log("scripts.js is loaded")


front_images = [
	"images/front_image_0.webp",
	"images/front_image_1.png",
	"images/front_image_2.png",
	"images/front_image_3.webp",
	"images/front_image_4.webp",
]

const frontImage = document.getElementById('front_image');

let currentImageIndex = 0;

function updateImage() {
	frontImage.src = front_images[currentImageIndex];
	currentImageIndex = (currentImageIndex + 1) % front_images.length;
}

setInterval(updateImage, 5000);
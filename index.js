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



function displayUpdates() {
	// Get the element with id "news"
	var newsElement = document.getElementById("news");

	// // Check if the element exists
	// if (!newsElement) {
	// 	console.error("Element with id 'news' not found.");
	// 	return;
	// }else{
	// 	console.log("Element with id 'news' found.");
	// }

	// Create a string to hold the HTML content
	var updatesHTML = "";

	// Iterate through the new_updates array
	new_updates.forEach(function (update) {
		console.log(update);
		// Use template literals to generate HTML
		updatesHTML += `
		<div class="col">
		  <div class="card h-100">
			<img src="${update.image}" class="card-img-top" alt="${update.name} image">
			<div class="card-body">
			  <h5 class="card-title">${update.name}</h5>
			  <p class="card-text">${update.desc}</p>
			  <a href="${update.link}" target="_blank">
				<button type="button" class="btn btn-dark">View More</button>
			  </a>
			</div>
		  </div>
		</div>
	  `;
	});

	// Set the innerHTML of the "news" element
	newsElement.innerHTML = updatesHTML;
}

// Call the function to display updates
displayUpdates();

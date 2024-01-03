function displayPastEvents() {
	// Get the element with id "news"
	var newsElement = document.getElementById("past_events");

	// // Check if the element exists
	// if (!newsElement) {
	// 	console.error("Element with id 'projects' not found.");
	// 	return;
	// }else{
	// 	console.log("Element with id 'projects' found.");
	// }

	// Create a string to hold the HTML content
	var updatesHTML = "";

	// Iterate through the array
	past_events.forEach(function (update) {  // this array is defined in data/events.js
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

function displayUpcomingEvents() {
	// Get the element with id "news"
	var newsElement = document.getElementById("upcoming_events");

	// // Check if the element exists
	// if (!newsElement) {
	// 	console.error("Element with id 'projects' not found.");
	// 	return;
	// }else{
	// 	console.log("Element with id 'projects' found.");
	// }

	// Create a string to hold the HTML content
	var updatesHTML = "";

	// Iterate through the array
	upcoming_events.forEach(function (update) {  // this array is defined in data/events.js
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

displayPastEvents();
displayUpcomingEvents();

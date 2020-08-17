$(document).ready(function() {
	// Initiate gifLoop for set interval
	var refresh;
	// Duration count in seconds
	const duration = 1000 * 10;
	// Giphy API defaults
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
		tag: "fail",
		type: "random",
		rating: "pg-13"
	};
	// Target gif-wrap container
	const $gif_wrap = $("#gif-wrap");
	// Giphy API URL
	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type + 
			"?api_key=" +
			giphy.apiKey +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

	// Call Giphy API and render data
	var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

	// Display Gif in gif wrap container
	var renderGif = _giphy => {
		console.log(_giphy);
		// Set gif as bg image
		$gif_wrap.css({
			"background-image": 'url("' + _giphy.image_original_url + '")'
		});

		// Start duration countdown
		// refreshRate();
	};

	// Call for new gif after duration
	// var refreshRate = () => {
	// 	// Reset set intervals
	// 	clearInterval(refresh);
	// 	refresh = setInterval(function() {
	// 		// Call Giphy API for new gif
	// 		newGif();
	// 	}, duration);
	// };

	// Call Giphy API for new gif
	newGif();
	
	
	const newGifButton = $('#new-gif');
	
	newGifButton.click(newGif)
});

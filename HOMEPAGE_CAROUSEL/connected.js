/*
----------
-
----------
MODAL ONLY
*/
var carouselOneContainer = document.querySelector(".gallery-one");
var images = [
	"../IMAGES/20flatoff-banner.jpg",
	"../IMAGES/25offer-banner.jpg",
	"../IMAGES/asian_paints_banner.jpg",
	// "https://via.placeholder.com/200",
	// "https://via.placeholder.com/200",
	// "https://via.placeholder.com/200",
];
function appendOffers(images) {
	images.map((singleImg) => {
		var myImageTag = document.createElement("img");
		myImageTag.setAttribute("src", singleImg);
		var mainDiv = document.createElement("div");
		mainDiv.setAttribute("class", "gallery-cell");
		mainDiv.append(myImageTag);
		carouselOneContainer.append(mainDiv);
	});
}
$(document).ready(function () {
	appendOffers(images);
	if (window.matchMedia("(max-width: 700px)").matches) {
		$(".gallery-one").flickity({
			// options
			cellAlign: "left",
			wrapAround: true,
			lazyLoad: true,
			autoPlay: 3000,
		});
	} else {
		$(".gallery-one").flickity({
			// options
			cellAlign: "left",
			wrapAround: true,
			lazyLoad: true,
			groupCells: 2,
			autoPlay: 3000,
		});
	}
});

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
		mainDiv.addEventListener("click", () => {
			goToOfferSection(singleImg);
		});
		carouselOneContainer.append(mainDiv);
	});
}
function goToOfferSection(singleImg) {
	let imgName = singleImg.split("/")[2];
	if (imgName === "20flatoff-banner.jpg") {
		window.location.href = "../OFFER_Section/index.html";
	}

	// window.location.href = "../OFFER_Section/index.html";
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

// WARniNG ADMIN PANEL RELATED CODE..
  //** FOR KNOWING THE COUNT OF USER..  
var visitorsCount = JSON.parse(localStorage.getItem("visitors"))||0;
if (window.location.href.indexOf("first_page.html") > -1){
	visitorsCount++;
    //console.log(visitorsCount);
	localStorage.setItem("visitors", JSON.stringify(visitorsCount));
}

var myTestDescs = [
	{
		topHeading: "Basic Master Health Checkup",
		numTests: "Includes 94 Tests",
		profiles: {
			line1: "Thyroid Profile",
			line2: "Diabetic profile",
			line3: "Cardic profile",
		},
		poweredBy: "Powered By Thyrocare",
		bulletPoints: {
			line1: "Online repoer in 24 hrs",
			line2: "NABL, CAP accredited",
		},
		footerSection: {
			price: "Rs 770",
			lineThroughPrice: "Rs 1100",
		},
	},
	{
		topHeading: "Hypertension Health Checkup",
		numTests: "Includes 79 Tests",
		profiles: {
			line1: "Aldosterone",
			line2: "Cortisol",
			line3: "Cholestrol tests",
		},
		poweredBy: "Powered By Thyrocare",
		bulletPoints: {
			line1: "Online repoer in 24 hrs",
			line2: "NABL, CAP accredited",
		},
		footerSection: {
			price: "Rs 2800",
			lineThroughPrice: "Rs 4000",
		},
	},
	{
		topHeading: "Complete Master Health Checkup",
		numTests: "Includes 114 Tests",
		profiles: {
			line1: "Thyroid Profile",
			line2: "Renal Profile",
			line3: "Liver function tests",
		},
		poweredBy: "Powered By Thyrocare",
		bulletPoints: {
			line1: "Online repoer in 24 hrs",
			line2: "NABL, CAP accredited",
		},
		footerSection: {
			price: "Rs 2380",
			lineThroughPrice: "Rs 3400",
		},
	},
];

let boxesTag = document.getElementById("bottomBoxes");

function mapTests(tests) {
	tests.map((indvTest) => {
		//TOP SECTION
		var h2Tag = document.createElement("h2");
		var numTestsHeading = document.createElement("h4");
		var testPTagOne = document.createElement("p");
		var testPTagTwo = document.createElement("p");
		var testPTagThree = document.createElement("p");
		var hrTag = document.createElement("hr");

		//DIVS
		var lowerDiv = document.createElement("div");
		var lowerFooterDiv = document.createElement("div");
		var upperDiv = document.createElement("div");
		var mainDiv = document.createElement("div");

		//BOTTOM SECTION
		var poweredByh4tag = document.createElement("h4");
		var ulTagOne = document.createElement("ul");
		var liTagOne = document.createElement("li");
		var liTagTwo = document.createElement("li");

		// SETTING ATTRIBUTES AND TEXT CONTENTS
		h2Tag.textContent = indvTest.topHeading;
		numTestsHeading.textContent = indvTest.numTests;
		testPTagOne.textContent = indvTest.profiles.line1;
		testPTagTwo.textContent = indvTest.profiles.line2;
		testPTagThree.textContent = indvTest.profiles.line3;
		poweredByh4tag.textContent = indvTest.poweredBy;
		liTagOne.textContent = indvTest.bulletPoints.line1;
		liTagTwo.textContent = indvTest.bulletPoints.line2;
		mainDiv.setAttribute("class", "testDescAndPrices");
		upperDiv.setAttribute("class", "upperDiv");
		lowerDiv.setAttribute("class", "lowerDiv");
		lowerFooterDiv.setAttribute("class", "lowerFooterDiv");

		//LOWER FOOTER DIV SECTION
		var footerDivImg = document.createElement("img");
		footerDivImg.setAttribute(
			"src",
			"./images/Screenshot 2021-11-05 at 13-37-45 Pulse Pharmacy Order Medicines from India's most-trusted Pharmacy.png"
		);
		var priceTag = document.createElement("h3");
		priceTag.textContent = indvTest.footerSection.price;
		var lineThroughPriceTag = document.createElement("p");
		lineThroughPriceTag.textContent = indvTest.footerSection.lineThroughPrice;
		var footerDivButton = document.createElement("button");
		footerDivButton.textContent = "Book";

		//APPENDING
		upperDiv.append(numTestsHeading, testPTagOne, testPTagTwo, testPTagThree);
		ulTagOne.append(liTagOne, liTagTwo);
		lowerDiv.append(poweredByh4tag, ulTagOne);
		lowerFooterDiv.append(
			footerDivImg,
			priceTag,
			lineThroughPriceTag,
			footerDivButton
		);
		mainDiv.append(h2Tag, upperDiv, hrTag, lowerDiv, lowerFooterDiv);
		boxesTag.append(mainDiv);
	});
}
window.addEventListener("load", () => {
	mapTests(myTestDescs);
});

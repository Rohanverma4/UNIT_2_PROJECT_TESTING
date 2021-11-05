var data = [
	{
		id: 1,
		name: "mobikwik",
		imgSrc: "https://www.pulseplus.in/content/images/payment/pay-9.png",
	},
	{
		id: 2,
		name: "visa",
		imgSrc: "https://www.pulseplus.in/content/images/payment/pay-1.png",
	},
	{
		id: 3,
		name: "mastercard",
		imgSrc: "https://www.pulseplus.in/content/images/payment/pay-4.png",
	},
	{
		id: 4,
		name: "rupay",
		imgSrc: "https://www.pulseplus.in/content/images/payment/pay-2.png",
	},
	{
		id: 5,
		name: "upi",
		imgSrc: "https://www.pulseplus.in/content/images/payment/pay-3.png",
	},
	{
		id: 6,
		name: "nitbanking",
		imgSrc: "https://www.pulseplus.in/content/images/payment/pay-5.png",
	},
	{
		id: 7,
		name: "paytm",
		imgSrc: "https://www.pulseplus.in/content/images/payment/pay-6.png",
	},
	{
		id: 8,
		name: "cashondelivery",
		imgSrc: "https://www.pulseplus.in/content/images/payment/pay-7.png",
	},
	{
		id: 9,
		name: "amex",
		imgSrc: "https://www.pulseplus.in/content/images/payment/pay-8.png",
	},
];

setTimeout(() => {
	var partnerDiv = document.getElementById("partnerSection");

	data.map((currData) => {
		var divTag = document.createElement("div");
		divTag.setAttribute("class", "partnerBox");
		var imgTag = document.createElement("img");
		imgTag.setAttribute("src", currData.imgSrc);

		divTag.append(imgTag);
		partnerDiv.append(divTag);
	});
}, 10);

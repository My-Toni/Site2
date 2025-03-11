const item = [
	{
		itemName: "JASA DESAIN",
		icon: "<span class='material-symbols-outlined'> draw </span>",
		itemDescription: "LOGO, UIUX, DLL",
		itemLink: "https://tonistore.my.id/services",
	},
	{
		itemName: "BUILD WEBSITE",
		icon: "<span class='material-symbols-outlined'> draw </span>",
		itemDescription: "Pembuatan Web",
		itemLink: "https://tonistore.my.id/services",
	},
	{
		itemName: "JASA RUN BOT",
		icon: "<span class='material-symbols-outlined'> draw </span>",
		itemDescription: "Jasa Run Bot WA",
		itemLink: "https://tonistore.my.id/services",
	},
	{
		itemName: "RECODE",
		icon: "<span class='material-symbols-outlined'> draw </span>",
		itemDescription: "SC BOT/WEB",
		itemLink: "https://tonistore.my.id/services",
	},
	{
		itemName: "JASA INSTALL",
		icon: "<span class='material-symbols-outlined'> draw </span>",
		itemDescription: "Panel Petrodactyl",
		itemLink: "https://tonistore.my.id/services",
	},
];

document.addEventListener("DOMContentLoaded", function () {
	let serviceList = document.getElementById("serviceList");

	item.forEach(service => {
		let itemToAdd = `<div class="service-card">
<div class="icons">
${service.icon}
</div>
<h5>${service.itemName}</h5>
<p>${service.itemDescription}</p>
<a href="${service.itemLink}" class="btn">READ MORE</a>
</div>`;

		serviceList.innerHTML += itemToAdd;
	});
});

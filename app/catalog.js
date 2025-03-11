/**
 * lu bisa tambah produk
 * di bawah ini
 */

const products = [
	{ name: "Panel Ram 1GB Cpu 25%", price: 3000, category: "PANEL BOT WHATSAPP" },
	{ name: "Panel Ram 2GB Cpu 50% ", price: 5000, category: "PANEL BOT WHATSAPP" },
	{ name: "Panel Ram 3GB Cpu 75%", price: 7000, category: "PANEL BOT WHATSAPP" },
	{ name: "Panel Ram 4GB Cpu 100%", price: 10000, category: "PANEL BOT WHATSAPP" },
	{ name: "Panel Ram 5GB Cpu 125%", price: 15000, category: "PANEL BOT WHATSAPP" },
	{ name: "FOLLOWER IG BULE", price: 1000, category: "KEBUTUHAN SUNTIK SOSMED" },
	{ name: "LIKE IG", price: 1000, category: "KEBUTUHAN SUNTIK SOSMED" },
	{ name: "VIEW IG", price: 1000, category: "KEBUTUHAN SUNTIK SOSMED" },
	{ name: "FOLLOWER TIKTOK", price: 4000, category: "KEBUTUHAN SUNTIK SOSMED" },
	{ name: "LIKE TIKTOK", price: 1000, category: "KEBUTUHAN SUNTIK SOSMED" },
	{ name: "VIEW TIKTOK", price: 1000, category: "KEBUTUHAN SUNTIK SOSMED" },
	{ name: "Vps Ram 1 Core 1", price: 20000, category: "VIRTUAL PRIVATE SERVER" },
	{ name: "Vps Ram 2 Core 1", price: 30000, category: "VIRTUAL PRIVATE SERVER" },
	{ name: "Vps Ram 4 Core 2", price: 40000, category: "VIRTUAL PRIVATE SERVER" },
	{ name: "Vps Ram 8 Core 4", price: 50000, category: "VIRTUAL PRIVATE SERVER" },
	{ name: "Vps Ram 16 Core 4", price: 65000, category: "VIRTUAL PRIVATE SERVER" },
	// tambah sesua keinginan lu
];

function loadProducts(filter = "all") {
	const productList = document.getElementById("product-list");
	productList.innerHTML = "";

	const filteredProducts = products.filter(
		product => filter === "all" || product.category === filter,
	);

	filteredProducts.forEach(product => {
		const productCard = document.createElement("div");
		productCard.classList.add("product-card");

		productCard.innerHTML = `
                    <div class="product-header">
                        <img src="assets/logo.png" width="100" alt="Toni Logo" />
                    </div>
                    <div class="product-body">
                        <h3 class="product-title">${product.name}</h3>
                        <p class="product-description">Rp. ${product.price}</p>
                        <a href="https://wa.me/62881026788157?text=Assalamualaikum+bang+saya+mau+beli+*${product.name}*" class="btn">Beli</a>
                    </div>
                `;

		productList.appendChild(productCard);
	});
}

document.addEventListener("DOMContentLoaded", () => {
	loadProducts();

	document.querySelectorAll(".filter-button").forEach(button => {
		button.addEventListener("click", e => {
			const filter = e.target.getAttribute("data-filter");
			loadProducts(filter);
		});
	});
});

import { menuArray } from "./data.js"

function getMenuHtml() {
	return menuArray.map((menuItem) => {
		return `
		<div class="menu-item">
			<p class="food-emoji">${menuItem.emoji}</p>
			<div class="food-desc">
				<p class="food-title">${menuItem.name}</p>
				<p class="food-ingredient">${menuItem.ingredients}</p>
				<p class="food-price">${menuItem.price}</p>
			</div>
			<i class="fa-solid fa-plus" data-foodid="${menuItem.id}"></i>
		</div>
		`
	}).join("")
}

function renderMenu() {
	document.getElementById('menu').innerHTML += getMenuHtml()
}

document.addEventListener('click', (e) => {
	if (e.target.dataset.foodid) {
		console.log(e.target.dataset.foodid)
	}
})

renderMenu()
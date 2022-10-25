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

function getBasketHtml() {
	const orderArray = JSON.parse(localStorage.getItem('order'))
	return orderArray.map((orderObj) => {
		const menuObj = menuArray.filter((menuItem) => menuItem.id === parseInt(orderObj.id))[0]
		return `
		<div class="basket-item">
			<p class="basket-food">${menuObj.name}</p>
			<button class="remove-btn" data-remove="${menuObj.id}">remove</button>
			<p class="basket-price">${menuObj.price * orderObj.number}</p>
		</div>
		`
	}).join("")
}

export { getBasketHtml, getMenuHtml }
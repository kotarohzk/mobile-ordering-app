import { menuArray } from "./data.js"

function getMenuHtml() {
	return menuArray.map((menuItem) => {
		return `
		<div class="menu-item">
			<p class="food-emoji">${menuItem.emoji}</p>
			<div class="food-desc">
				<p class="food-title">${menuItem.name}</p>
				<p class="food-ingredient">${menuItem.ingredients}</p>
				<p class="food-price">$${menuItem.price}</p>
			</div>
			<div class="icon-group">
				<i class="fa-solid fa-minus" data-decrease="${menuItem.id}"></i>
				<p id="quantity-${menuItem.id}">0</p>
				<i class="fa-solid fa-plus" data-foodid="${menuItem.id}"></i>
			</div>
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
			<p class="basket-price">$${menuObj.price * orderObj.number}</p>
		</div>
		`
	}).join("")
}

function getPriceHtml() {
	const orderArray = JSON.parse(localStorage.getItem('order'))
	const totalPrice = orderArray.reduce((previousValue, currentValue) => {
		const menuPrice = menuArray.filter((menuItem) => menuItem.id == currentValue.id)[0].price
		return previousValue + (currentValue.number * menuPrice)
	}, 0)
	return `
	<p class="total-price">Total price:</p>
	<p class="basket-price">$${totalPrice}</p>
	`
}

export { getBasketHtml, getMenuHtml, getPriceHtml }
import { handleAddToBasketClick, handleRemoveClick, handleDecreaseClick, updateOrderQuantity, handleOrderBtn, handlePayBtn } from "./handleClick.js"
import { getBasketHtml, getMenuHtml, getPriceHtml } from "./getHtml.js"

function renderMenu() {
	document.getElementById('menu').innerHTML += getMenuHtml()
}

function renderBasket() {
	document.getElementById('basket-item-container').innerHTML = getBasketHtml()
	document.getElementById('price').innerHTML = getPriceHtml()
	if (JSON.parse(localStorage.getItem('order')).length > 0) {
		document.getElementById('basket').style.display = "block"
	} else {
		document.getElementById('basket').style.display = "none"
	}
}

document.addEventListener('click', (evt) => {
	document.getElementById('confirmation-message').style.display = "none"
	if (evt.target.dataset.foodid) {
		handleAddToBasketClick(evt)
	}
	else if (evt.target.dataset.remove) {
		handleRemoveClick(evt)
	}
	else if (evt.target.dataset.decrease) {
		handleDecreaseClick(evt)
	}
	else if (evt.target.id === 'order-btn') {
		handleOrderBtn()
	}
	else if (!evt.target.closest(".form-section")) {
		document.getElementById('overlay').style.display = "none"
		document.getElementById('body').classList.remove('overflow-disable')
	}
	else if (evt.target.id === 'pay-btn') {
		handlePayBtn(evt)
	}
	if (localStorage.hasOwnProperty('order')) {
		renderBasket()
		updateOrderQuantity()
	}
})

renderMenu()
if (localStorage.hasOwnProperty('order')) {
	renderBasket()
	updateOrderQuantity()
}
import { handleAddToBasketClick, handleRemoveClick } from "./handleClick.js"
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
	if (evt.target.dataset.foodid) {
		handleAddToBasketClick(evt)
		renderBasket()
	}
	else if (evt.target.dataset.remove) {
		handleRemoveClick(evt)
		renderBasket()
	}
})

renderMenu()
if (localStorage.hasOwnProperty('order')) {
	renderBasket()
}
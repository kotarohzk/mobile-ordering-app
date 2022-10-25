import { handleAddToBasketClick } from "./handleClick.js"
import { getBasketHtml, getMenuHtml } from "./getHtml.js"

function renderMenu() {
	document.getElementById('menu').innerHTML += getMenuHtml()
}

function renderBasket() {
	document.getElementById('basket-item-container').innerHTML = getBasketHtml()
	document.getElementById('basket').style.display = "block"
}

document.addEventListener('click', (evt) => {
	if (evt.target.dataset.foodid) {
		handleAddToBasketClick(evt)
		renderBasket()
	}
})

renderMenu()

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

function handleAddToBucketClick(evt) {
	if (!localStorage.hasOwnProperty('order')) {
		localStorage.setItem('order', JSON.stringify([]))
	}
	const orderObjArray = JSON.parse(localStorage.getItem('order'))
	const orderObj = orderObjArray.filter((orderObj) => {
		return orderObj.id === evt.target.dataset.foodid
	})
	if (orderObj.length === 1) {
		orderObj[0].number++
	} else {
		orderObjArray.push({
			id: evt.target.dataset.foodid,
			number: 1 
		})
	}
	localStorage.setItem('order', JSON.stringify(orderObjArray))
}

document.addEventListener('click', (evt) => {
	if (evt.target.dataset.foodid) {
		handleAddToBucketClick(evt)
	}
})

renderMenu()
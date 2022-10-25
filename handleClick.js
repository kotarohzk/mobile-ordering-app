function handleAddToBasketClick(evt) {
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

function handleRemoveClick(evt) {
	const oldBasket = JSON.parse(localStorage.getItem('order'))
	// document.getElementById(`quantity-${evt.target.dataset.remove}`).textContent = 0
	const updatedBasket = oldBasket.filter((basketItem) => {
		return basketItem.id != evt.target.dataset.remove
	})
	localStorage.setItem('order', JSON.stringify(updatedBasket))
}

function handleDecreaseClick(evt) {
	let orderObjArray = JSON.parse(localStorage.getItem('order'))
	const orderObj = orderObjArray.filter((orderObj) => {
		return orderObj.id === evt.target.dataset.decrease
	})
	if (orderObj.length === 1 && parseInt(orderObj[0].number) > 0) {
		orderObj[0].number--
	}
	if (orderObj.length === 1 && parseInt(orderObj[0].number) === 0) {
		// document.getElementById(`quantity-${orderObj[0].id}`).textContent = 0
		orderObjArray = orderObjArray.filter((orderItem) => {
			return orderItem.id != orderObj[0].id
		})
	}
	localStorage.setItem('order', JSON.stringify(orderObjArray))
}

function updateOrderQuantity() {
	const quantityTags = document.querySelectorAll('.quantity')
	quantityTags.forEach(quantity => quantity.textContent = 0)
	const orderObjArray = JSON.parse(localStorage.getItem('order'))
	for (let orderObj of orderObjArray) {
		document.getElementById(`quantity-${orderObj.id}`).textContent = orderObj.number
	}
}

function handleOrderBtn() {
	document.getElementById('overlay').style.display = "block"
	document.getElementById('body').classList.add('overflow-disable')
}

function handlePayBtn(evt) {
	evt.preventDefault()
	document.getElementById('overlay').style.display = "none"
	document.getElementById('body').classList.remove('overflow-disable')
	const data = new FormData(document.getElementById('form'))
	document.getElementById('basket').style.display = "none"
	document.getElementById('confirmation-message').style.display = "block"
	document.getElementById('confirmation-message').innerHTML = `
		<p>Thanks ${data.get('name').toUpperCase()}! Your order is on its way.</p>
	`
	localStorage.clear()
}

export { handleAddToBasketClick, handleRemoveClick, handleDecreaseClick, updateOrderQuantity, handleOrderBtn, handlePayBtn }
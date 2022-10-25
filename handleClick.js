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
	updateOrderQuantity()
}

function handleRemoveClick(evt) {
	const oldBasket = JSON.parse(localStorage.getItem('order'))
	document.getElementById(`quantity-${evt.target.dataset.remove}`).textContent = 0
	const updatedBasket = oldBasket.filter((basketItem) => {
		return basketItem.id != evt.target.dataset.remove
	})
	localStorage.setItem('order', JSON.stringify(updatedBasket))
	updateOrderQuantity()
}

function handleDecreaseClick(evt) {
	let orderObjArray = JSON.parse(localStorage.getItem('order'))
	const orderObj = orderObjArray.filter((orderObj) => {
		return orderObj.id === evt.target.dataset.decrease
	})
	if (orderObj.length === 1 && parseInt(orderObj[0].number) > 0) {
		orderObj[0].number--
	}
	if (parseInt(orderObj[0].number) === 0) {
		document.getElementById(`quantity-${orderObj[0].id}`).textContent = 0
		orderObjArray = orderObjArray.filter((orderItem) => {
			return orderItem.id != orderObj[0].id
		})
	}
	localStorage.setItem('order', JSON.stringify(orderObjArray))
	updateOrderQuantity()
}

function updateOrderQuantity() {
	const orderObjArray = JSON.parse(localStorage.getItem('order'))
	for (let orderObj of orderObjArray) {
		document.getElementById(`quantity-${orderObj.id}`).textContent = orderObj.number
	}
}

export { handleAddToBasketClick, handleRemoveClick, handleDecreaseClick }
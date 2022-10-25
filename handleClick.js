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
	const updatedBasket = oldBasket.filter((basketItem) => {
		return basketItem.id != evt.target.dataset.remove
	})
	localStorage.setItem('order', JSON.stringify(updatedBasket))
}

export { handleAddToBasketClick, handleRemoveClick }
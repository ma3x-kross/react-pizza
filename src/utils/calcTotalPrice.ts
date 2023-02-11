import { ItemCartType } from '../@types/Cart'

export const calcTotalPrice = (items: ItemCartType[]) => {
	return items.reduce((sum, item) => {
		return sum + item.price * item.count
	}, 0)
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemCartType } from '../../@types/Cart'
import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { getCartFromLS } from '../../utils/getCartFromLS'
import { RootState } from '../store'

interface CartSliceState {
	totalPrice: number
	items: ItemCartType[]
}

const { items, totalPrice } = getCartFromLS()

const initialState: CartSliceState = {
	totalPrice,
	items,
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action: PayloadAction<ItemCartType>) {
			const findItem = state.items.find((item) => {
				return (
					item.id === action.payload.id &&
					item.type === action.payload.type &&
					item.size === action.payload.size
				)
			})
			if (findItem) findItem.count++
			else {
				state.items.push({ ...action.payload, count: 1 })
			}
			state.totalPrice = calcTotalPrice(state.items)
		},
		minusItem(state, action: PayloadAction<ItemCartType>) {
			const findItem = state.items.find((item) => {
				return (
					item.id === action.payload.id &&
					item.type === action.payload.type &&
					item.size === action.payload.size
				)
			})
			if (findItem) findItem.count--
			state.totalPrice = calcTotalPrice(state.items)
		},
		removeItem(state, action: PayloadAction<ItemCartType>) {
			const findItemIndex = state.items.findIndex((item) => {
				return (
					item.id === action.payload.id &&
					item.type === action.payload.type &&
					item.size === action.payload.size
				)
			})
			state.items.splice(findItemIndex, findItemIndex + 1)
			state.totalPrice = calcTotalPrice(state.items)
		},
		clearItems(state) {
			state.items = []
			state.totalPrice = 0
		},
	},
})

export const selectCart = (state: RootState) => state.cart
export const selectCartData = (id: string) => (state: RootState) =>
	state.cart.items.filter((item) => item.id === id)

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions
export default cartSlice.reducer

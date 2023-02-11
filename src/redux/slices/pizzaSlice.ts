import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Pizza } from '../../@types/Pizza'
import { RootState } from '../store'

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
	'pizza/fetchPizzaStatus',
	async ({ currentPage, category, sortBy, order, search }) => {
		const { data } = await axios.get<Pizza[]>(
			`https://63c92f52904f040a96580f4b.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
		)
		return data
	},
)

interface PizzaSliceState {
	items: Pizza[]
	status: 'loading' | 'success' | 'error'
}

const initialState: PizzaSliceState = {
	items: [],
	status: 'loading',
}

const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPizzas.pending, (state) => {
				state.status = 'loading'
				state.items = []
			})
			.addCase(fetchPizzas.fulfilled, (state, action) => {
				state.items = action.payload
				state.status = 'success'
			})
			.addCase(fetchPizzas.rejected, (state) => {
				state.status = 'error'
				state.items = []
			})
	},
})

export const selectPizza = (state: RootState) => state.pizza

export default pizzaSlice.reducer

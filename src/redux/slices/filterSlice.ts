import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Sort, SortPropertyEnum } from '../../@types/Filter'
import { RootState } from '../store'

interface FilterSliceState {
	categoryId: number
	sortValue: Sort
	currentPage: number
	searchValue: string
}

const initialState: FilterSliceState = {
	categoryId: 0,
	sortValue: {
		name: 'популярности (DESC)',
		property: SortPropertyEnum.RATING_DESC,
	},
	currentPage: 1,
	searchValue: '',
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload
		},
		setSortValue(state, action: PayloadAction<Sort>) {
			state.sortValue = action.payload
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		},
		setSearchValue(state, action: PayloadAction<string>) {
			state.searchValue = action.payload
		},
	},
})

export const selectFilter = (state: RootState) => state.filter
export const selectSearchValue = (state: RootState) => state.filter.searchValue

export const { setCategoryId, setSortValue, setCurrentPage, setSearchValue } =
	filterSlice.actions

export default filterSlice.reducer

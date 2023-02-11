import React from 'react'
import s from './Search.module.scss'
import searchIcon from '../../assets/search.svg'
import clearIcon from '../../assets/clear.svg'
import debounce from 'lodash.debounce'
import { useDispatch, useSelector } from 'react-redux'
import {
	selectSearchValue,
	setSearchValue,
} from '../../redux/slices/filterSlice'
const Search: React.FC = React.memo(() => {
	const dispatch = useDispatch()
	const [value, setValue] = React.useState('')
	const searchValue = useSelector(selectSearchValue)
	const inputRef = React.useRef<HTMLInputElement>(null)

	const onClickClear = () => {
		setValue('')
		dispatch(setSearchValue(''))
		inputRef?.current?.focus()
	}

	const updateSearchValue = React.useCallback(
		debounce((str: string) => {
			dispatch(setSearchValue(str))
		}, 300),
		[],
	)
	const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		setValue((state) => {
			updateSearchValue(state)
			return state
		})
	}

	return (
		<div className={s.search}>
			<img className={s.search__img} src={searchIcon} alt='search icon'></img>
			<input
				ref={inputRef}
				value={value}
				onChange={onChangeInput}
				className={s.search__input}
				placeholder='Поиск пиццы...'
			></input>
			{searchValue && (
				<img
					onClick={onClickClear}
					className={s.clear__img}
					src={clearIcon}
					alt='clear icon'
				></img>
			)}
		</div>
	)
})

export default Search

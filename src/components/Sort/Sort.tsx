import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sort, SortPropertyEnum } from '../../@types/Filter'
import { selectFilter, setSortValue } from '../../redux/slices/filterSlice'
import s from './Sort.module.scss'

type SortProps = {
	value: Sort
}

const SortComponent: React.FC<SortProps> = React.memo(({ value }) => {
	const [isVisible, setIsVisible] = React.useState(false)
	const dispatch = useDispatch()
	const sortRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (sortRef.current && !event.composedPath().includes(sortRef.current))
				setIsVisible(false)
		}
		document.body.addEventListener('click', handleClick)
		return () => document.body.removeEventListener('click', handleClick)
	}, [])

	const list: Sort[] = [
		{ name: 'популярности (DESC)', property: SortPropertyEnum.RATING_DESC },
		{ name: 'популярности (ASC)', property: SortPropertyEnum.RATING_ASC },
		{ name: 'цене (DESC)', property: SortPropertyEnum.PRICE_DESC },
		{ name: 'цене (ASC)', property: SortPropertyEnum.PRICE_ASC },
		{ name: 'алфавиту (DESC)', property: SortPropertyEnum.TITLE_DESC },
		{ name: 'алфавиту (ASC)', property: SortPropertyEnum.TITLE_ASC },
	]

	return (
		<div ref={sortRef} className={s.sort}>
			<div className={s.label}>
				<p>Сортировка по: </p>
				<span onClick={() => setIsVisible(!isVisible)}>{value.name}</span>
			</div>
			{isVisible && (
				<div className={s.popup}>
					<ul>
						{list.map((obj) => (
							<li
								key={obj.name}
								className={value.name === obj.name ? s.active : ''}
								onClick={() => {
									dispatch(setSortValue(obj))
									setIsVisible(!isVisible)
								}}
							>
								{obj.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
})

export default SortComponent

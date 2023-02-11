import React from 'react'
import s from './Categories.module.scss'
import { useSelector, useDispatch } from 'react-redux'

import { selectFilter, setCategoryId } from '../../redux/slices/filterSlice'

type CategoriesProps = {
	categoryId: number
}

const Categories: React.FC<CategoriesProps> = React.memo(({ categoryId }) => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианские',
		'Гриль',
		'Острые',
		'Закрытые',
	]
	const dispatch = useDispatch()

	return (
		<div className={s.categories}>
			<ul className={s.list}>
				{categories.map((item, index) => (
					<li
						key={item}
						onClick={() => dispatch(setCategoryId(index))}
						className={index === categoryId ? s.active : ''}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
})
export default Categories

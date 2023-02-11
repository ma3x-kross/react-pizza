import React from 'react'
import s from './PizzaBlock.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, selectCartData } from '../../redux/slices/cartSlice'
import { ItemCartType } from '../../@types/Cart'
import { Pizza } from '../../@types/Pizza'

const PizzaBlock: React.FC<Pizza> = ({
	id,
	title,
	price,
	imageUrl,
	sizes,
	types,
}) => {
	const [activeSize, setActiveSize] = React.useState(0)
	const typesName = ['традиционное', 'тонкое']
	const [activeType, setActiveType] = React.useState<number>(0)
	const cartItems = useSelector(selectCartData(id))
	const addedCount = cartItems.reduce(
		(sum: number, item) => sum + item.count,
		0,
	)
	const dispatch = useDispatch()
	const handleClickButton = () => {
		const item = {
			id,
			title,
			price,
			imageUrl,
			size: sizes[activeSize],
			type: typesName[activeType],
		}
		dispatch(addItem(item as ItemCartType))
	}
	return (
		<div className={s.pizza__block}>
			<div className={s.top}>
				<img src={imageUrl} alt='pizza' />
				<h3 className={s.name}>{title}</h3>
			</div>
			<div className={s.selector}>
				<ul>
					{types.map((typeId, index) => (
						<li
							key={typeId}
							onClick={(e) => {
								e.preventDefault()
								setActiveType(index)
							}}
							className={index === activeType ? s.active : ''}
						>
							{typesName[typeId]}
						</li>
					))}
				</ul>
				<ul>
					{sizes.map((size, index) => (
						<li
							key={size}
							onClick={(e) => {
								e.preventDefault()
								setActiveSize(index)
							}}
							className={index === activeSize ? s.active : ''}
						>
							{size}см
						</li>
					))}
				</ul>
			</div>
			<div className={s.block__bottom}>
				<p className={s.price}>От {price}р</p>
				<button
					onClick={(e) => {
						handleClickButton()
						e.preventDefault()
					}}
				>
					Добавить
					{addedCount > 0 && <span>{addedCount}</span>}
				</button>
			</div>
		</div>
	)
}

export default PizzaBlock

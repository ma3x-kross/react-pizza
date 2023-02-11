import React from 'react'
import { useDispatch } from 'react-redux'
import s from './ItemCart.module.scss'
import { addItem, minusItem, removeItem } from '../../redux/slices/cartSlice'
import { ItemCartType } from '../../@types/Cart'



const ItemCart: React.FC<ItemCartType> = ({
	id,
	title,
	imageUrl,
	type,
	size,
	count,
	price,
}) => {
	const dispatch = useDispatch()
	const onClickPlus = () => {
		dispatch(addItem({ id, type, size } as ItemCartType))
	}
	const onClickMinus = () => {
		dispatch(minusItem({ id, type, size } as ItemCartType))
	}
	const onClickRemove = () => {
		dispatch(removeItem({ id, type, size } as ItemCartType))
	}

	return (
		<div className={s.item}>
			<div className={s.info}>
				<img src={imageUrl} alt='pizza'></img>
				<div className={s.text}>
					<h3>{title}</h3>
					<p>
						{type}, {size}см.
					</p>
				</div>
			</div>
			<div className={s.count}>
				<button disabled={count===1} onClick={onClickMinus}>-</button>
				{count}
				<button onClick={onClickPlus}>+</button>
			</div>
			<span className={s.price}>{price * count}₽</span>
			<button onClick={onClickRemove} className={s.clear}>
				×
			</button>
		</div>
	)
}

export default ItemCart

import React from 'react'
import Logo from '../Logo'
import s from './Header.module.scss'
import bag from '../../assets/bag.svg'
import { Link, useLocation } from 'react-router-dom'
import Search from '../Search'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/slices/cartSlice'

const Header: React.FC = () => {
	const location = useLocation()
	const { items, totalPrice } = useSelector(selectCart)
	const count = items.reduce((sum: number, item) => {
		return sum + item.count
	}, 0)

	let isMounted = React.useRef(false)

	React.useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(items)
			localStorage.setItem('cart', json)
		}
		isMounted.current = true
	}, [items])

	return (
		<div className={s.header}>
			<Logo />
			{location.pathname != '/cart' && (
				<>
					<Search />
					<Link to='cart' className={s.cart}>
						<span className={s.cart__price}>{totalPrice} ₽</span>
						<div className={s.button__delimiter}></div>
						<img src={bag} alt='cart-icon'></img>
						<span className={s.cart__count}> {count}</span>
					</Link>
				</>
			)}
		</div>
	)
}

export default Header

import React from 'react'
import s from './EmptyCart.module.scss'
import image from '../../assets/empty-cart.png'
import { Link } from 'react-router-dom'

const EmptyCart: React.FC = () => {
	return (
		<div className={s.content}>
			<h1>Корзина пустая 😕</h1>
			<p>
				Вероятней всего, вы не заказывали ещё пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img src={image} alt='empty cart'></img>

			<Link className={s.btn} to='/'>
				<button>
					<svg
						width='8'
						height='14'
						viewBox='0 0 8 14'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M7 13L1 6.93015L6.86175 1'
							stroke='#D3D3D3'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						></path>
					</svg>{' '}
					Вернуться назад
				</button>
			</Link>
		</div>
	)
}

export default EmptyCart

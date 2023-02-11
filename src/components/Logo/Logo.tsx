import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import s from './Logo.module.scss'

const Logo: React.FC = React.memo(() => {
	return (
		<Link to='/' className={s.logo}>
			<img src={logo} alt='pizza-logo' />
			<div className='logo-text'>
				<h1 className={s.logo__title}>REACT PIZZA</h1>
				<p className={s.logo__subtitle}>самая вкусная пицца во вселенной</p>
			</div>
		</Link>
	)
})

export default Logo

import React from 'react'
import s from './NotFoundPage.module.scss'
const NotFoundPage: React.FC = () => {
	return (
		<div className={s.container}>
			<h1 className={s.title}>
				<span>😕</span>
				<br />
				Ничего не найдено
			</h1>
			<h2 className={s.subtitle}>
				К сожалению данная страница отсутствует в нашем интернет-магазине
			</h2>
		</div>
	)
}

export default NotFoundPage

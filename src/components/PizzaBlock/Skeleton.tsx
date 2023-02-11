import React from 'react'
import ContentLoader from 'react-content-loader'
import s from './PizzaBlock.module.scss'

const Skeleton: React.FC = () => (
	<ContentLoader
		className={s.pizza__block}
		speed={2}
		width={290}
		height={555}
		viewBox='0 0 290 555'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='0' y='325' rx='10' ry='10' width='290' height='120' />
		<rect x='165' y='474' rx='20' ry='20' width='115' height='50' />
		<rect x='28' y='486' rx='10' ry='10' width='85' height='30' />
		<rect x='0' y='280' rx='10' ry='10' width='290' height='25' />
		<circle cx='145' cy='130' r='130' />
	</ContentLoader>
)

export default Skeleton

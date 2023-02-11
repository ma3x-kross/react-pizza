import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import s from './PizzaPage.module.scss'

const PizzaPage: React.FC = () => {

	interface IPizza {
		imageUrl: string,
		title: string,
		price: number
	}
	const [pizza, setPizza] = React.useState<IPizza>()
	const { id } = useParams()
	const navigate = useNavigate()

	React.useEffect(() => {
		const fetchPizza = async () => {
			try {
				const { data } = await axios.get(
					`https://63c92f52904f040a96580f4b.mockapi.io/items/${id}`,
				)
				setPizza(data)
			} catch (e) {
				alert('К сожалению данная пицца не найдена :(')
				navigate('/')
			}
		}
		fetchPizza()
	}, [])

	return (
		<div className={s.container}>
			{pizza ? (
				<>
					<img src={pizza.imageUrl} alt='pizza'></img>
					<div>
						<h1>{pizza.title}</h1>
						<h3>От {pizza.price}₽</h3>
					</div>
				</>
			) : (
				<h1>Загрузка...</h1>
			)}
		</div>
	)
}

export default PizzaPage

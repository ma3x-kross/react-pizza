import React from 'react'
import Categories from '../../components/Categories'
import PizzaBlock from '../../components/PizzaBlock/PizzaBlock'
import Sort from '../../components/Sort'
import Skeleton from '../../components/PizzaBlock/Skeleton'
import Pagination from '../../components/Pagination/Pagination'
import s from './HomePage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter, setCurrentPage } from '../../redux/slices/filterSlice'
import { fetchPizzas, selectPizza } from '../../redux/slices/pizzaSlice'
import { Link } from 'react-router-dom'
import { useAppDispatch } from '../../redux/store'

const HomePage: React.FC = () => {
	const onChangePage = React.useCallback((page: number) => {
		dispatch(setCurrentPage(page))
	}, [])

	const dispatch = useAppDispatch()
	const { items, status } = useSelector(selectPizza)
	const { categoryId, sortValue, currentPage, searchValue } =
		useSelector(selectFilter)
	const getPizzas = () => {
		const category = categoryId > 0 ? `category=${categoryId}` : ''
		const sortBy = sortValue.property.replace('-', '')
		const order = sortValue.property.includes('-') ? 'asc' : 'desc'
		const search = searchValue !== '' ? `&search=${searchValue}` : ''
		dispatch(
			fetchPizzas({
				category,
				sortBy,
				order,
				search,
				currentPage: String(currentPage),
			}),
		)
	}
	React.useEffect(() => {
		getPizzas()
		window.scrollTo(0, 0)
	}, [categoryId, sortValue, searchValue, currentPage])
	return (
		<div>
			<div className={s.top}>
				<Categories categoryId={categoryId} />
				<Sort value={sortValue} />
			</div>

			{status === 'error' ? (
				<div className={s.error}>
					<h1>Произошла ошибка 😕</h1>
					<p>
						К сожалению не удалось найти пиццы. Попробуйте
						<br />
						повторить попытку позже
					</p>
				</div>
			) : (
				<>
					<h1 className={s.title}>Наши пиццы:</h1>
					<div className={s.content}>
						<div className={s.grid}>
							{status === 'loading'
								? [...new Array(4)].map((item, index) => (
										<Skeleton key={index} />
								  ))
								: items.map((item) => (
										<Link key={item.id} to={`/pizza/${item.id}`}>
											<PizzaBlock {...item} />{' '}
										</Link>
								  ))}
						</div>
					</div>
				</>
			)}

			<Pagination currentPage={currentPage} handlePageClick={onChangePage} />
		</div>
	)
}

export default HomePage

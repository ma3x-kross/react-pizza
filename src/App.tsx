import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import MainLayout from './layouts/MainLayout'
import Cart from './pages/Cart'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import PizzaPage from './pages/PizzaPage/index'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element=<HomePage /> />
					<Route path='cart' element=<Cart /> />
					<Route path='pizza/:id' element=<PizzaPage /> />
					<Route path='*' element=<NotFoundPage /> />
				</Route>
			</Routes>
		</div>
	)
}

export default App

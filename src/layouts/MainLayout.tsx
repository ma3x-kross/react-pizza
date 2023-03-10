import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const MainLayout: React.FC = () => {
	return (
		<div className='container'>
			<Header />
			<Outlet />
		</div>
	)
}

export default MainLayout

import React from 'react'
import ReactPaginate from 'react-paginate'
import s from './Pagination.module.scss'

type PaginationProps = {
	currentPage: number
	handlePageClick: (page:number)=>void
}

const Pagination: React.FC<PaginationProps> = React.memo(
	({ currentPage, handlePageClick }) => {
		return (
			<ReactPaginate
				className={s.root}
				breakLabel='...'
				nextLabel='>'
				onPageChange={(event) => {
					handlePageClick(event.selected + 1)
				}}
				pageRangeDisplayed={4}
				pageCount={3}
				forcePage={currentPage - 1}
				previousLabel='<'
			/>
		)
	},
) 

export default Pagination

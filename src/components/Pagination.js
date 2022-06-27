import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Pagination({goNextPage, goPrevPage, prevPage, nextPage}) {
  return (
    <div className='p-3'>
        {prevPage && <button type='button' onClick={goPrevPage}><FaChevronLeft /></button>}
        {nextPage && <button type='button' onClick={goNextPage}><FaChevronRight /></button>}
    </div>
  )
}

export default Pagination
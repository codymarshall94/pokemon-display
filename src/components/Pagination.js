import React from 'react'

function Pagination({goNextPage, goPrevPage, prevPage, nextPage}) {
  return (
    <div className='p-3'>
        {prevPage && <button type='button' onClick={goPrevPage}>Previous</button>}
        {nextPage && <button type='button' onClick={goNextPage}>Next</button>}
    </div>
  )
}

export default Pagination
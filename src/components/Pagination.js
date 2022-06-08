import React from 'react'

function Pagination({goNextPage, goPrevPage}) {
  return (
    <div>
        <button type='button' onClick={goPrevPage}>Previous</button>
        <button type='button' onClick={goNextPage}>Next</button>
    </div>
  )
}

export default Pagination
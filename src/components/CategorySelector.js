import React from 'react';
import "../css/categoryselector.css";

function CategorySelector({setCategory}) {
  return (
    <div className="container selection">
              <button type="button" className='category-btn' onClick={() => setCategory("about")}>
                About
              </button>
              <button type="button" className='category-btn' onClick={() => setCategory("stats")}>
                Stats
              </button>
              <button type="button" className='category-btn' onClick={() => setCategory("evolution")}>
                Evolution
              </button>
              <button type="button" className='category-btn' onClick={() => setCategory("moves")}>
                Moves
              </button>
            </div>
  )
}

export default CategorySelector
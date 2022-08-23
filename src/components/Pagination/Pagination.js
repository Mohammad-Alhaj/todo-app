import React from 'react';

const Pagination = ({ tasksForPage, totalPosts, paginate }) => {
  let pages = Math.ceil(totalPosts/tasksForPage)
  const pageNumbers = [];

  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  return (
    
      <div className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </div>
    
  );
};

export default Pagination;
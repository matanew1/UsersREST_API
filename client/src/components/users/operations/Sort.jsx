import React from 'react';

function Sort(props) {
  const { sortBy } = props;

  const handleSort = (event) => {
    sortBy(event.target.value);
  };

  return (
    <div className="sort-container">
      <h2 className='sortby'>Sort By:</h2>
      <button value="name" onClick={handleSort} className='sort_opt'>Name</button>
      <button value="email" onClick={handleSort} className='sort_opt'>Email</button>
      <button value="id" onClick={handleSort} className='sort_opt'>Default</button>
    </div>
  );
}

export default Sort;

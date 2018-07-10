import React, { Component } from 'react';

const NameFilter = (props) => {
  

  return (
    <div className="filter">
      <form className="search" onSubmit={(event)=>props.handleNameFilter(event)}>
        <label>
          Name Filter:
          <input
            type="text"
            name="name"
            placeholder="Filter board games by name"
          />
        </label>
        <input type="submit" value="Filter" />
      </form>
    </div>
  )
}

export default NameFilter;

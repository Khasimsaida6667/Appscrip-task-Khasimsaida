import React from 'react';

function Filters() {
  return (
    <aside className="filters">
      <h3>FILTERS</h3>
      <div className="filter-group">
        <h4>CUSTOMIZABLE</h4>
        <label><input type="checkbox" /> All</label>
      </div>
      <div className="filter-group">
        <h4>IDEAL FOR</h4>
        <label><input type="checkbox" /> All</label>
      </div>
      <div className="filter-group">
        <h4>OCCASION</h4>
        <label><input type="checkbox" /> All</label>
      </div>
      <div className="filter-group">
        <h4>WORK</h4>
        <label><input type="checkbox" /> All</label>
      </div>
      <div className="filter-group">
        <h4>FABRIC</h4>
        <label><input type="checkbox" /> All</label>
      </div>
      <div className="filter-group">
        <h4>SEGMENT</h4>
        <label><input type="checkbox" /> All</label>
      </div>
      <div className="filter-group">
        <h4>SUITABLE FOR</h4>
        <label><input type="checkbox" /> All</label>
      </div>
      <div className="filter-group">
        <h4>RAW MATERIALS</h4>
        <label><input type="checkbox" /> All</label>
      </div>
      <div className="filter-group">
        <h4>PATTERN</h4>
        <label><input type="checkbox" /> All</label>
      </div>
    </aside>
  );
}

export default Filters;
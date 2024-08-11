import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";
import './ProductFilters.css';

function ProductFilters() {
  const filterGroups = [
     'IDEAL FOR', 'OCCASION', 'WORK', 'FABRIC',
    'SEGMENT', 'SUITABLE FOR', 'RAW MATERIALS', 'PATTERN'
  ];

  return (
    <aside className="product-filters">
      <hr/>
      <div className='fil'>
        <h5>3425 ITEMS</h5>
        <h5><MdKeyboardArrowLeft/>HIDE FILTER</h5>
      </div>
      <hr/>
      <label className='lab'>
      <input type="checkbox" />CUSTOMIZABLE</label>
      <hr/>
      
      {filterGroups.map((group, index) => (
        <div key={index} className="filter-group">
          <div className='arrow'>
          <h4>{group}</h4> <div className='arr'><IoIosArrowDown/></div></div>
          <label>
            
            All
          </label>
          <hr/>
        </div>
      ))}
    </aside>
  );
}

export default ProductFilters;
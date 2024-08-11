import React, { useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import ProductCard from './ProductCard';
import './ProductGrid.css';

function ProductGrid() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-grid-container">
      <hr/>
      <div className="product-grid-header">
      
        <span>{products.length} ITEMS</span>
        <div className="sort-dropdown">
          <span>RECOMMENDED</span>
          <button className="dropdown-icon"><IoIosArrowDown/></button>
        </div>
        
      </div>
      <hr/>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
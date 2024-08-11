import React from 'react';
import { CiHeart } from "react-icons/ci";
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} />
        {Math.random() < 0.2 && <span className="out-of-stock">OUT OF STOCK</span>}
      </div>
      <h3>{product.title}</h3>
      <div className='heart'>
      <p><span className='span1'>Sign in </span>or Create an account to see pricing</p>
      <CiHeart className='heart-si'/>
      </div>

    </div>
  );
}

export default ProductCard;
import React from 'react';
import ProductHeader from './ProductHeader';
import ProductFilters from './ProductFilters';
import ProductGrid from './ProductGrid';
import './ProductPage.css';

function ProductPage() {
  return (
    <main className="product-page">
      <ProductHeader />
      <div className="product-content">
        <ProductFilters />
        <ProductGrid />
      </div>
    </main>
  );
}

export default ProductPage;
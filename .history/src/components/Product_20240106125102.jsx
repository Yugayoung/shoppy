import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../api/firebase';

export default function Product() {
  const {
    isLoding,
    error,
    data: products,
  } = useQuery(['products'], getProducts);
  return (
    <>
      {isLoding && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { getCart } from '../api/firebase';

export default function CartStatus() {
  const { data: products } = useQuery(['carts'], getCart);
  return (
    <div>
      <FaCartPlus />
      {products && <p>{products.lenth}</p>}
    </div>
  );
}

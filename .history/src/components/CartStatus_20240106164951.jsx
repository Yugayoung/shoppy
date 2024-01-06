import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: getCart,
  });

  return (
    <div>
      <FaCartPlus />
      {products && <p>{products.lenth}</p>}
    </div>
  );
}

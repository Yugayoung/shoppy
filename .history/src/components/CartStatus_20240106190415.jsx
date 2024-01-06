import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import useCart from '../hooks/useCart';

export default function CartStatus() {
  const {
    cartQuery: { data: products },
  } = useCart();

  return (
    <div className='relative'>
      <FaCartPlus className='text-4xl' />
      {products && (
        <p className='w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-2 -right-3'>
          {products.length}
        </p>
      )}
    </div>
  );
}

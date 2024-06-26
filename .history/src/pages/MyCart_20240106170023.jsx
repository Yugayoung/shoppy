import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';

export default function MyCart() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });
  return <div>My Cart</div>;
}

import React from 'react';

export default function CartItem({ product, product: {id, image, title, option, quantity, price} }) {
  return <li>
    <img src={image}
  </li>;
}

import React from 'react';
import { AiOutlineMinusSquare } from 'react-icons/Ai';

export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
}) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <div>
          <AiOutlineMinusSquare />
          <span>{quantity}</span>
          <AiOutlinePlusSquare />
          <RiDeleteBin5Fill />
        </div>
      </div>
    </li>
  );
}

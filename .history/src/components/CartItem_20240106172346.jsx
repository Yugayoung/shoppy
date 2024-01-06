import React from 'react';
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from 'react-icons/Ai';
import { RiDeleteBinFill } from 'react-icons/Ri';

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
          <RiDeleteBinFill />
        </div>
      </div>
    </li>
  );
}

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, description, category, price, options },
    },
  } = useLocation();
  const [selected, setSelected] = useState(options && options[0]);
  const handleSelect = (e) => setSelected(e.target.value);
  const handleClick = (e) => {
    //여기서 장바구니에 추가하면 됨!
  };
  return (
    <section>
      <p className='mx-12 mt-4 text-gray-700'>{category}</p>
      <section className='flex flex-col md:flex-row p-4'>
        <img className='w-full px-4 basis-7/12' src={image} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>₩{price}</p>
          <p>{description}</p>
          <p>옵션:</p>
          <select onChange={handleSelect} value={selected}>
            {options &&
              options.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
          </select>
          <Button text='장바구니에 추가' onClick={handleClick} />
        </div>
      </section>
    </section>
  );
}

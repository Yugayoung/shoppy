import React from 'react';

export default function Banner() {
  return (
    <section className='h-96 bg-yellow-900 relative'>
      <div></div>
      <div className='absolute w-full top-32 text-center text-gray-50 drop-shadow-2xl'>
        <h2>Shop Wuth US</h2>
        <p>Best Products, High Quality</p>
      </div>
    </section>
  );
}

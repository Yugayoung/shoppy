import React from 'react';

export default function ProductDetail() {
  const {
    state: {
      product: {id, image,title, description, category, price, options},
    }
  }
  return <div>Product Details</div>;
}

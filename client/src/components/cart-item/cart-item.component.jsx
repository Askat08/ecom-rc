import React from 'react';

import { CartItemConainer, ItemDetails } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemConainer>
    <img src={imageUrl} alt='item'/>
    <ItemDetails>
      <span>{name}</span>
      <span>{quantity} x {price}</span>
    </ItemDetails>
  </CartItemConainer>
);

export default CartItem;
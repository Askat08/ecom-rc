import React from 'react';
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

import {CheckoutItemContainer, ImageContainer, RemoveButton} from './checkout-item.styles';
 
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return(
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={() => addItem(cartItem)}>&#10095;</span>
      </span>
      <span className='price'>${price}</span>
      <RemoveButton
 onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
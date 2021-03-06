import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {CartDropdownContainer, CartItemsContainer, EmptyMessage} from './cart-dropdown.styles';
 
const Cart  = ({cartItems, history, dispatch}) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)) : <EmptyMessage>You Cart is EMPTY</EmptyMessage>
      }
    </CartItemsContainer> 
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }} >GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);


const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));
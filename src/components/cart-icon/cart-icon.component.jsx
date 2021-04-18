import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";

const CartIcon = ({toggleCartHidden,itemCount }) => (
  <CartIconContainer>
    <ShoppingIcon  className='shopping-icon' onClick={toggleCartHidden}/>
    <ItemCount>{itemCount}</ItemCount>
  </CartIconContainer>
);


const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});


const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
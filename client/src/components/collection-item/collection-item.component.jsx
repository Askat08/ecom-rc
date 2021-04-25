import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../custom-button/custom-button.component';


import { CollectionItemContainer, CollectionFooterContainer, ImageContainer, Name, Price } from './collection-item.styles';
 
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ImageContainer
          imageUrl={imageUrl}
      />

      <CollectionFooterContainer>
        <Name>{ name }</Name>
        <Price>{ price }</Price>
      </CollectionFooterContainer>
      <CustomButton inverted onClick={() => addItem(item)}> ADD TO CART </CustomButton>
    </CollectionItemContainer>
)};

const mapDispatchToProps = dispatch => ({
  addItem: (item) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
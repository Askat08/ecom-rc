import { createSelector } from "reselect";


const selectorShop = state => state.shop;

export const selectorShopData = createSelector(
  [selectorShop],
  shop => shop.collections
);

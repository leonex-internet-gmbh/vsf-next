import {ComputedProperty, UseCategory, UseProduct} from '@vue-storefront/core';

// @todo: replace with real types

type Product = {

}

type Category = {

}

type User = {
  firstName?: string;
  lastName?: string;
}

type UserAddress = {
}

// @todo: replace with real Cart types
type Cart = {

}

type CartItem = {

}

type Coupon = {

}

type Order = {

}

type OrderItem = {

}

type OrderSearchParams = {

}

type ShippingMethod = {

}

type WishlistProduct = {

}

type Wishlist = {

}

type Route = {

}

interface UseRouter<ROUTE> {
  route: ComputedProperty<ROUTE>;
  search: (url: string) => Promise<void>;
  loading: ComputedProperty<boolean>;
}

interface Breadcrumb {
  text: string;
  route: {
    path: string;
  };
}

export {
  Cart,
  CartItem,
  Category,
  Coupon,
  Order,
  OrderItem,
  OrderSearchParams,
  Product,
  ShippingMethod,
  User,
  UserAddress,
  Wishlist,
  WishlistProduct,
  UseCategory,
  UseProduct,
  UseRouter,
  Route,
  Breadcrumb
};

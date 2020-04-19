/* istanbul ignore file */

import useCategory from './composables/useCategory';
import useProduct from './composables/useProduct';
import useCart from './composables/useCart';
import useCheckout from './composables/useCheckout';
import useUser from './composables/useUser';
import useLocale from './composables/useLocale';
import useUserOrders from './composables/useUserOrders';
import useContent from './composables/useContent';
import useWishlist from './composables/useWishlist';
import useRouter from './composables/useRouter';

import {
  cartGetters,
  categoryGetters,
  checkoutGetters,
  productGetters,
  userGetters,
  orderGetters
} from './composables/getters';

export {
  useCategory,
  useProduct,
  useCart,
  useCheckout,
  useUser,
  useLocale,
  useUserOrders,
  useContent,
  useWishlist,
  useRouter,
  cartGetters,
  categoryGetters,
  checkoutGetters,
  productGetters,
  userGetters,
  orderGetters
};

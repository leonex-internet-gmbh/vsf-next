/* istanbul ignore file */

import { UserOrderGetters } from '@vue-storefront/interfaces';
import { Order } from '../../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getDate = (order: Order): string => '123';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getId = (order: Order): string => '123';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getStatus = (order: Order): string => '';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getPrice = (order: Order): number | null => 0;

const orderGetters: UserOrderGetters<Order> = {
  getDate,
  getId,
  getStatus,
  getPrice
};

export default orderGetters;

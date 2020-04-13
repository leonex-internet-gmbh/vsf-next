/* istanbul ignore file */

import { useUserOrdersFactory, UseUserOrdersFactoryParams } from '@vue-storefront/factories';
import { Order, OrderSearchParams } from '../../types';
import { SearchResult } from '@vue-storefront/interfaces';

// @todo userOrders

const params: UseUserOrdersFactoryParams<Order, OrderSearchParams> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchOrders: async (params: OrderSearchParams = {}): Promise<SearchResult<Order>> => new Promise(() => ({}))
};

const useUserOrders: () => any = useUserOrdersFactory<Order, OrderSearchParams>(params);

export default useUserOrders;

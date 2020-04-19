import { products } from '@vue-storefront/magento-api';
import { useProductFactory, SearchResult } from '@vue-storefront/core';
import { UseProduct } from '../../types';
import {ProductAttributeFilter, ProductAttributeSortInput, ProductList} from '@vue-storefront/magento-api';

const productsSearch = async (params: {search?: string;
                              filter?: ProductAttributeFilter;
                              pageSize?: number;
                              currentPage?: number;
                              sort?: ProductAttributeSortInput;}): Promise<SearchResult<ProductList>> => {

  const productResults = await products(params.search, params.filter, params.pageSize, params.currentPage, params.sort);

  return {
    data: productResults.data.products,
    total: productResults.data.products.total_count
  };
};

const useProduct: (cacheId: string) => UseProduct<ProductList> = useProductFactory<ProductList, any>({
  productsSearch
});

export default useProduct;

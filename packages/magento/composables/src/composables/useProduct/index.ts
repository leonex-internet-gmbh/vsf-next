import { getProduct } from '@vue-storefront/magento-api';
import { useProductFactory } from '@vue-storefront/factories';
import { UseProduct, Product } from '../../types';
import {SearchResult} from '@vue-storefront/interfaces';

const productsSearch = async (params): Promise<SearchResult<Product>> => {
  const searchParams = {
    ids: params.ids,
    with: params.term,
    where: params.term,
    sort: params.sort,
    page: params.pagination.page,
    masterKey: '',
    term: params.term
  };

  const products = await getProduct(searchParams);

  return {
    data: products,
    total: products.length
  };
};

const useProduct: (cacheId: string) => UseProduct<Product> = useProductFactory<Product, any>({
  productsSearch
});

export default useProduct;

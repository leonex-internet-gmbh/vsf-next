import { categoryList } from '@vue-storefront/magento-api';
import { useCategoryFactory } from '@vue-storefront/core';
import { UseCategory, Category } from '../../types';

const useCategory: (id: string) => UseCategory<Category> = useCategoryFactory<Category, any>({
  categorySearch: async (params) => {
    const categoryResponse = await categoryList(params);
    return categoryResponse.data.categoryList;
  }
});

export default useCategory;

import { getCategory } from '@vue-storefront/magento-api';
import { useCategoryFactory } from '@vue-storefront/factories';
import { UseCategory, Category } from '../../types';

const useCategory: (id: string) => UseCategory<Category> = useCategoryFactory<Category, any>({
  categorySearch: getCategory
});

export default useCategory;

import {CategoryGetters, AgnosticCategoryTree} from '@vue-storefront/core';
import { Category } from '@vue-storefront/magento-api/src/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCategoryTree = (category: Category): AgnosticCategoryTree | null => {
  const buildTree = (rootCategory: Category): AgnosticCategoryTree => ({
    label: rootCategory.name,
    slug: rootCategory.url_path + rootCategory.url_suffix,
    items: rootCategory.children.map(buildTree)
  });

  if (!category) {
    return null;
  }

  console.log('aaa', category);

  return buildTree(category);
};

const categoryGetters: CategoryGetters<Category> = {
  getTree: getCategoryTree
};

export default categoryGetters;

import {CategoryGetters, AgnosticCategoryTree} from '@vue-storefront/core';
import {Breadcrumb} from '../../types';
import {Category} from '@vue-storefront/magento-api';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getCategoryTree = (category: Category): AgnosticCategoryTree | null => {
  const buildTree = (rootCategory: Category): AgnosticCategoryTree => ({
    label: rootCategory.name,
    slug: '/' + rootCategory.url_path + rootCategory.url_suffix,
    items: rootCategory.children.map(buildTree)
  });
  if (!category) {
    return null;
  }
  return buildTree(category);
};

export const getBreadcrumbs = (category: Category): Breadcrumb[] => {
  if (!category) {
    return [];
  }
  let breadcrumbs = [];
  if (category.breadcrumbs !== null) {
    breadcrumbs = category.breadcrumbs.map((breadcrumb) => {
      return {
        text: breadcrumb.category_name,
        route: {
          path: breadcrumb.category_name
        }
      };
    });
  }

  breadcrumbs.push({
    text: category.name,
    route: {
      path: category.url_path + category.url_suffix
    }
  });

  return breadcrumbs;
};

const categoryGetters: CategoryGetters<Category> = {
  getTree: getCategoryTree,
  getBreadCrumbs: getBreadcrumbs
};

export default categoryGetters;

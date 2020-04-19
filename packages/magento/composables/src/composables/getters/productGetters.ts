import {
  AgnosticMediaGalleryItem,
  AgnosticAttribute,
  AgnosticPrice,
  ProductGetters
} from '@vue-storefront/core';
import { Product, Category } from '@vue-storefront/magento-api';

type ProductVariantFilters = any

// Product

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductName = (product: Product): string => product.name;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductSlug = (product: Product, category?: Category): string => {
  console.log(product, category);
  const rewrites = product.url_rewrites;
  let url = '/p/' + product.sku;
  if (!rewrites) {
    return url;
  }
  loopOuter:
  for (let i = 0; i < rewrites.length; i++) {
    const rewrite = rewrites[i];
    if (category && category.id && rewrite.parameters) {
      for (let j = 0; j < rewrite.parameters.length; j++) {
        const parameter = rewrite.parameters[j];
        // eslint-disable-next-line max-depth
        if (parameter.name === 'category' && parameter.value === category.id) {
          url = '/' + rewrite.url;
          break loopOuter;
        }
      }
    } else if (rewrite.parameters.length === 1) {
      url = '/' + rewrite.url;
      break;
    }
  }

  return url;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductPrice = (product: Product): AgnosticPrice => {
  let regular = 0;
  let special = null;
  if (product.price_range) {
    regular = product.price_range.minimum_price.regular_price.value;
    const final = product.price_range.minimum_price.final_price.value;
    if (final < regular) {
      special = final;
    }
  }

  return {
    regular: regular,
    special: special
  };
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductGallery = (product: Product): AgnosticMediaGalleryItem[] => [];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductCoverImage = (product: Product): string => {
  if (!product) {
    return null;
  }

  if (product.small_image) {
    return product.small_image.url;
  }

  return '';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductFiltered = (products: Product[], filters: ProductVariantFilters | any = {}): Product[] => {
  return products;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getProductAttributes = (products: Product[] | Product, filterByAttributeName?: string[]): Record<string, AgnosticAttribute | string> => {
  return {};
};

export const getProductDescription = (product: Product): any => (product as any)._description;

export const getProductCategoryIds = (product: Product): string[] => (product as any)._categoriesRef;

export const getProductId = (product: Product): string => product.id;

export const getFormattedPrice = (price: number) => {
  if (price === null) {
    return null;
  }

  return String(price);
};

const productGetters: ProductGetters<Product, ProductVariantFilters> = {
  getName: getProductName,
  getSlug: getProductSlug,
  getPrice: getProductPrice,
  getGallery: getProductGallery,
  getCoverImage: getProductCoverImage,
  getFiltered: getProductFiltered,
  getAttributes: getProductAttributes,
  getDescription: getProductDescription,
  getCategoryIds: getProductCategoryIds,
  getId: getProductId,
  getFormattedPrice: getFormattedPrice
};

export default productGetters;

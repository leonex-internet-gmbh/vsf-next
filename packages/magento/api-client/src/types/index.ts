import {
  CategoryFilterInput,
  categoryList,
  CategoryTree,
  ProductAttributeFilterInput, ProductInterface,
  Products,
  urlResolver
} from './GraphQL';
import {ApolloQueryResult} from 'apollo-client';

export type Cart = {}
export type Wishlist = {}
export type Product = ProductInterface;
export type ProductList = Products;
export type Category = CategoryTree;
export type CategoryFilter = CategoryFilterInput
export type ShippingMethod = {}
export type LineItem = {};

export type ProductAttributeFilter = ProductAttributeFilterInput;

export interface ApiClientMethods {
  categoryList(categoryFilter?: CategoryFilterInput): Promise<ApolloQueryResult<categoryList>>;
  urlResolver(url: string): Promise<ApolloQueryResult<urlResolver>>;
  products(): Promise<ApolloQueryResult<Products>>;
}

export interface ApiClientSettings {
  api?: {
    uri: string;
  };
  overrides: {
    categoryList?(categoryFilter?: CategoryFilterInput): Promise<ApolloQueryResult<categoryList>>;
    urlResolver?(url: string): Promise<ApolloQueryResult<urlResolver>>;
    products?(): Promise<ApolloQueryResult<Products>>;
  };
}

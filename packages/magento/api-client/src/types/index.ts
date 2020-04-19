import {CategoryFilterInput, categoryList, CategoryTree, urlResolver} from './GraphQL';
import {ApolloQueryResult} from 'apollo-client';

export type Cart = {}
export type Wishlist = {}
export type ProductVariant = {}
export type Category = CategoryTree;
export type CategoryFilter = CategoryFilterInput
export type ShippingMethod = {}
export type LineItem = {};

export interface ApiClientMethods {
  getCategory(params: {}): Promise<Category[]>;
  getProduct(params: {}): Promise<ProductVariant[]>;
}

export interface ApiClientSettings {
  api?: {
    uri: string;
  };
  overrides: {
    getCategory?(): Promise<ApolloQueryResult<categoryList>>;
    getProduct?(params: {}): Promise<ProductVariant[]>;
    urlResolver?(url: string): Promise<ApolloQueryResult<urlResolver>>;
  };
}

import {apolloClient, settings} from '../../index';
import {ProductAttributeFilterInput, Products, ProductAttributeSortInput} from '../../types/GraphQL';
import query from './query';
import {ApolloQueryResult} from 'apollo-client';

export default async function (
  search?: string,
  filter?: ProductAttributeFilterInput,
  pageSize = 20,
  currentPage = 1,
  sort?: ProductAttributeSortInput
): Promise<ApolloQueryResult<Products>> {

  if (settings.overrides.products) {
    return settings.overrides.products();
  }
  return await apolloClient.query<Products>({
    query: query,
    variables: {search, filter, pageSize, currentPage, sort}
  });
}

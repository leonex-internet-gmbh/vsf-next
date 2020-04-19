import {apolloClient, settings} from '../../index';
import {categoryList, CategoryFilterInput} from '../../types/GraphQL';
import {query, filteredQuery} from './query';
import {ApolloQueryResult} from 'apollo-client';

export default async function (categoryFilter?: CategoryFilterInput): Promise<ApolloQueryResult<categoryList>> {
  if (settings.overrides.getCategory) {
    return settings.overrides.getCategory();
  }
  if (!categoryFilter) {
    return await apolloClient.query<categoryList>({
      query: query
    });
  } else {
    return await apolloClient.query<categoryList>({
      query: filteredQuery,
      variables: {filters: categoryFilter}
    });
  }
}

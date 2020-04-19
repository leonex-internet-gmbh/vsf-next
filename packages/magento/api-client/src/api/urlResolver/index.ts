import {apolloClient, settings} from '../../index';
import {urlResolver} from '../../types/GraphQL';
import {ApolloQueryResult} from 'apollo-client';
import query from './query';

export default async function (url: string): Promise<ApolloQueryResult<urlResolver>> {
  if (settings.overrides.urlResolver) {
    return settings.overrides.urlResolver(url);
  }
  return await apolloClient.query<urlResolver>({
    query: query,
    variables: {url: url}
  });
}

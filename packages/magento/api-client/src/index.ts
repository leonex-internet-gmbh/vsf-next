import ApolloClient from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import fetch from 'isomorphic-fetch';
import { InMemoryCache } from 'apollo-cache-inmemory';
import products from './api/products';
import categoryList from './api/categoryList';
import urlResolver from './api/urlResolver';
import { apiClientFactory } from '@vue-storefront/core';
import { ApiClientMethods, ApiClientSettings } from './types';
export * from './types';

let apolloClient: ApolloClient<any>;

const { setup, override, getSettings } = apiClientFactory<ApiClientMethods, ApiClientSettings>({
  defaultSettings: {},
  onSetup: (config: ApiClientSettings) => {
    if (config.api) {

      const publicApiLink = createHttpLink({ uri: config.api.uri, fetch });
      const link = ApolloLink.from([publicApiLink]);

      apolloClient = new ApolloClient({
        cache: new InMemoryCache({}),
        link: link
      });
    }

  }
});

const settings = getSettings();

export {
  products,
  categoryList,
  urlResolver,
  apolloClient,
  override,
  setup,
  settings
};

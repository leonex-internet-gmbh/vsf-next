import getProduct from './api/getProduct';
import getCategory from './api/getCategory';
import { apiClientFactory } from '@vue-storefront/factories';

const { setup, override } = apiClientFactory<any, any>({
  defaultSettings: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onSetup: (config: any) => {}
});

export {
  getProduct,
  getCategory,
  override,
  setup
};

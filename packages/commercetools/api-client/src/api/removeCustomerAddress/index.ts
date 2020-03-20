import { Customer, AddressInput } from '../../types/GraphQL';
import { UpdateMyCustomerResponse } from '../../types/Api';
import { apolloClient } from '../../index';
import updateMyCustomer from '../updateMyCustomer/defaultMutation';

const removeCustomerAddress = (customer: Customer, address: AddressInput): Promise<UpdateMyCustomerResponse> => apolloClient.mutate({
  mutation: updateMyCustomer,
  variables: {
    version: customer.version,
    actions: [{
      removeAddress: {
        addressId: address.id
      }
    }]
  }
});

export default removeCustomerAddress;
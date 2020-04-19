import { urlResolver } from '@vue-storefront/magento-api';
import {useSSR} from '@vue-storefront/core';
import { UseRouter, Route } from '../../types';
import {computed, ref, Ref} from '@vue/composition-api';

export default function useRouter(cacheId?: string): UseRouter<Route> {
  const { initialState, saveToInitialState } = useSSR(cacheId);
  const route: Ref<Route> = ref(initialState || {});
  const loading = ref(false);

  const search = async (url: string) => {
    if (!initialState) {
      loading.value = true;
    }
    route.value = await urlResolver(url);
    saveToInitialState(route.value);
    loading.value = false;
  };

  return {
    search,
    loading: computed(() => loading.value),
    route: computed(() => route.value)
  };
}

<template>
  <div>
    <div v-if="routeType.type === 'CATEGORY'">
      <Category :category-id="routeType.id"/>
    </div>
  </div>
</template>
<script>
import {useRouter} from '@vue-storefront/magento';
import Category from './Category';
import { computed } from '@vue/composition-api';
import { onSSR } from '@vue-storefront/core';

export default {
  components: {
    Category
  },
  setup(props, context) {
    const { path } = context.root.$route;
    const {loading, search, route} = useRouter('router:' + path);
    onSSR(async () => {
      await search(path);
      if (route.value.data.urlResolver === null) {
        context.root.$nuxt.error({ statusCode: 404, message: 'Page not found' });
      }
    });

    const routeType = computed(() => {
      if (loading.value || route.value.data.urlResolver === null) {
        return {};
      }
      return route.value.data.urlResolver;
    });

    return {
      routeType,
      Category
    };
  }

};
</script>


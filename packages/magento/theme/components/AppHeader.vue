<template>
  <SfHeader
    active-sidebar="activeSidebar"
    @click:cart="toggleCartSidebar"
    @click:account="onAccountClicked"
    :cartItemsQty="cartTotalItems"
    >
    <template #logo>
      <nuxt-link to="/" class="sf-header__logo">
        <SfImage src="/icons/logo.svg" alt="Vue Storefront Next" class="sf-header__logo-image"/>
      </nuxt-link>
    </template>
    <template #navigation>
      <SfHeaderNavigationItem v-for="category in categoryTree.items" v-bind:key="category.slug">
        <nuxt-link :to="category.slug">
          {{ category.label }}
        </nuxt-link>
      </SfHeaderNavigationItem>
    </template>
  </SfHeader>
</template>

<script>
import { SfHeader, SfImage } from '@storefront-ui/vue';
import uiState from '~/assets/ui-state';
import { useCart, useUser, cartGetters, categoryGetters, useCategory } from '@vue-storefront/magento';
import { computed } from '@vue/composition-api';
const { toggleCartSidebar, toggleLoginModal } = uiState;

export default {
  components: {
    SfHeader,
    SfImage
  },
  setup(props, { root }) {
    const { isAuthenticated } = useUser();
    const onAccountClicked = () => {
      isAuthenticated && isAuthenticated.value ? root.$router.push('/my-account') : toggleLoginModal();
    };
    const { cart } = useCart();
    const { categories, search, loading } = useCategory('categoryRootTree');
    search();
    const cartTotalItems = computed(() => {
      const count = cartGetters.getTotalItems(cart.value);
      // TODO: remove once resolved by UI team: https://github.com/DivanteLtd/storefront-ui/issues/922
      return count ? count.toString() : null;
    });
    const categoryTree = computed(() => {
      if (loading.value) {
        return {children: []};
      }

      return categoryGetters.getTree(categories.value[0]);
    });

    return {
      categoryTree,
      cartTotalItems,
      toggleLoginModal,
      onAccountClicked,
      toggleCartSidebar
    };
  }
};
</script>

<style lang="scss" scoped>
.sf-header__logo-image {
  height: 100%;
}
</style>

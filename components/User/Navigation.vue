<script setup>
const drawer = ref(true)
const rail = ref(true)

const items = [
  { title: 'Dashboard', icon: 'mdi-home-city' },
  { title: 'Profile', icon: 'mdi-account-circle' },
  { title: 'Order', icon: 'mdi-van-utility' },
  { title: 'Track', icon: 'mdi-access-point-network' },
  { title: 'Get Estimate', icon: 'mdi-calculator' },
  { title: 'Report', icon: 'mdi-chart-line' },
  { title: 'Transaction', icon: 'mdi-alpha-t-circle-outline' },
  { title: 'Shopping', icon: 'mdi-shopping-outline' },
  { title: 'Wallet', icon: 'mdi-wallet-bifold-outline' },
  { title: 'Settings', icon: 'mdi-cog-outline' },
  { title: 'Logout', icon: 'mdi-power' },
]
</script>

<template>
  <!-- <v-navigation-drawer v-model="drawer" :rail="rail" :permanent="!$vuetify.display.xs" :temporary="$vuetify.display.xs"
      @click="rail = false"> -->
  <v-navigation-drawer v-model="drawer" :rail="rail" permanent @click="rail = false">
    <v-list-item-title class="my-3 text-center">
      <nuxt-link to="/">
        <img v-show="$vuetify.theme.name == 'dark'" src="@/assets/aaj/aaj-logo.png" width="50" alt="logo" />
        <img v-show="$vuetify.theme.name == 'light'" src="@/assets/aaj/logo.png" width="50" alt="logo" />
      </nuxt-link>
    </v-list-item-title>

    <v-divider></v-divider>

    <v-list-item title="James Smith" prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" nav>
      <template v-slot:append>
        <v-btn variant="text" icon="mdi-chevron-left" @click.stop="rail = !rail"></v-btn>
      </template>
    </v-list-item>

    <v-list density="compact" nav>
      <v-list-item v-for="(item, i) in  items " :key="i" :prepend-icon="item.icon" :title="item.title" :value="item.title"
        @click="$emit('handleRouteChange', (item.title).toLowerCase())"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>


<style lang="scss" scoped></style>
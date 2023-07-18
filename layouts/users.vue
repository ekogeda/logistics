<script setup>
const route = useRoute();
useHead({
  meta: [{ property: "og:title", content: `AAJExp - ${route.meta.title}` }],
});
</script>

<template>
  <v-card class="admin-layout">
    <v-layout>
      <UserNavigation />

      <v-main>
        <slot />

        <UserFooter />
      </v-main>
    </v-layout>
  </v-card>
</template>

<style lang="scss" scoped></style>

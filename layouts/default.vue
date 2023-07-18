<script setup>
const route = useRoute();

useHead({
  meta: [{ property: "og:title", content: `AAJExp - ${route.meta.title}` }],
});
</script>

<template>
  <div class="default-layout container">
    <v-card>
      <v-layout>
        <TheNavbar />

        <v-main>
          <slot />

          <TheFooter />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<style scoped></style>

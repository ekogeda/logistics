<template>
  <v-app light class="text-center">
    <div class="grid">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>

      <img src="/assets/404.svg" loading="lazy" class="img" alt="404" />
      <NuxtLink to="/"> Home page </NuxtLink>
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
.grid {
  display: grid;
  align-items: center;
  height: 100vh;
}

h1 {
  font-size: 20px;
}

.img {
  display: block;
  margin: 20px auto;
  width: 50%;
}
</style>

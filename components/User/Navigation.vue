<script setup>
import { useTheme } from "vuetify";
const router = useRouter();

const handleRouteChange = (params) => {
  if (params != "logout") {
    console.log("Link:", params);
    if (params == "get estimate") params = "estimate";

    params == "dashboard"
      ? router.push({ path: "/users" })
      : router.push({ path: "/users/" + params });
  } else {
    router.push({ path: "/" });
  }
};

const drawer = ref(null)
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark ? "light" : "dark");

const icons = [
  { title: "Search", icon: "mdi-magnify" },
  { title: "Notification", icon: "mdi-bell-badge" },
  { title: "Settings", icon: "mdi-cog" },
];

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
  <v-navigation-drawer v-model="drawer">
    <v-list-item-title class="my-3 text-center">
      <nuxt-link to="/">
        <img v-show="$vuetify.theme.name == 'dark'" src="@/assets/aaj/aaj-logo.png" width="50" alt="logo" />
        <img v-show="['light', 'lightTheme'].includes($vuetify.theme.name)" src="@/assets/aaj/logo.png" width="50"
          alt="logo" />
      </nuxt-link>
    </v-list-item-title>

    <v-divider />

    <v-list-item title="James Smith" prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg" nav></v-list-item>

    <v-list density="compact" nav>
      <v-list-item v-for="(item, i) in  items " :key="i" :prepend-icon="item.icon" :title="item.title" :value="item.title"
        @click="handleRouteChange(item.title.toLowerCase())"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar prominent fixed :color="$vuetify.theme.name == 'dark' ? 'grey-darken-4' : 'white'">
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

    <v-spacer />

    <nuxt-link to="/" class="mt-3">
      <img v-show="$vuetify.theme.name == 'dark'" src="@/assets/aaj/aaj-logo.png" width="40" alt="logo" />
      <img v-show="$vuetify.theme.name == 'light'" src="@/assets/aaj/logo.png" width="40" alt="logo" />
    </nuxt-link>

    <v-spacer />

    <v-btn :color="$vuetify.theme.name == 'dark' ? 'yellow darken-3' : 'dark'" @click="toggleTheme" icon>
      <v-icon>
        {{
          $vuetify.theme.name == "dark"
          ? "mdi-weather-night"
          : "mdi-weather-sunny"
        }}
      </v-icon>
    </v-btn>

    <v-btn icon v-for="(icon, i) in icons" :key="i" class="hidden-xs">
      <v-icon>{{ icon.icon }}</v-icon>
    </v-btn>

    <v-menu transition="scale-transition">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" icon class="hidden-sm-and-up">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(icon, i) in icons" :key="i" :title="icon.title">
          <template v-slot:prepend>
            <v-btn size="x-small" variant="text" class="me-1" icon>
              <v-icon>{{ icon.icon }}</v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>


<style lang="scss" scoped>
.v-toolbar-title {
  flex: none !important;
}
</style>
<script setup>
import { useTheme } from "vuetify";

const route = useRoute();
useHead({
  meta: [{ property: "og:title", content: `AAJExp - ${route.meta.title}` }],
});

const { $toast } = useNuxtApp();
const router = useRouter();
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark ? "light" : "dark");

const icons = [
  { title: "Search", icon: "mdi-magnify" },
  { title: "Notification", icon: "mdi-bell-badge" },
  { title: "Settings", icon: "mdi-cog" },
];

const onChangeRoute = (params) => {
  if (params != "logout") {
    console.log("Link:", params);
    // $toast.success('You did it!', { position: 'top-right' });
    if (params == "get estimate") params = "estimate";

    params == "dashboard"
      ? router.push({ path: "/users" })
      : router.push({ path: "/users/" + params });
  } else {
    $toast.success("Thank you for using AAJExpress!", { position: "top-right" });
    router.push({ path: "/" });
  }
};
</script>

<template>
  <div class="admin-layout">
    <v-card>
      <v-layout>
        <UserNavigation @handleRouteChange="onChangeRoute" />

        <v-app-bar fixed :color="$vuetify.theme.name == 'dark' ? 'grey-darken-4' : 'white'">
          <v-btn class="hidden-sm-and-up" size="small" icon><v-icon>mdi-menu-open</v-icon></v-btn>
          <v-toolbar title="Dashboard" :color="$vuetify.theme.name == 'dark' ? 'grey-darken-4' : 'white'" dark>
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

            <v-sheet class="hidden-xs">
              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-bell-badge</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-cog</v-icon>
              </v-btn>
            </v-sheet>

            <v-menu transition="scale-transition">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="hidden-sm-and-up" icon>
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
          </v-toolbar>
        </v-app-bar>

        <v-main>
          <slot />

          <UserFooter />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<style lang="scss" scoped></style>

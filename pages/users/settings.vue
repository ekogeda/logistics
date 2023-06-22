<script setup>
definePageMeta({ layout: "users" });

const notify = ref([]);
</script>

<template>
  <v-container class="my-10">
    <v-card class="pa-5">
      <h4>Security Information</h4>
      <v-row>
        <v-col cols="auto" md="4" sm="4">
          <v-dialog transition="dialog-top-transition" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn
                variant="plain"
                size="small"
                class="text-capitalize"
                v-bind="props"
                >Change email address</v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar
                  color="orange-darken-3"
                  title="Change email address"
                ></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">Coming Soon!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" class="text-capitalize" @click="isActive.value = false">Close</v-btn>
                  <v-btn class="bg-orange-darken-3 text-white text-capitalize">Save</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
        <v-col cols="12" md="4" sm="3">
          <v-dialog transition="dialog-top-transition" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn
                variant="plain"
                size="small"
                class="text-capitalize"
                v-bind="props"
                >Change password</v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar color="orange-darken-3" title="Change password"></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">Coming Soon!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" class="text-capitalize" @click="isActive.value = false">Close</v-btn>
                  <v-btn class="bg-orange-darken-3 text-white text-capitalize">Save</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
        <v-col cols="12" md="4" sm="3">
          <v-dialog transition="dialog-top-transition" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn
                variant="plain"
                size="small"
                class="text-capitalize"
                v-bind="props"
                >Change security question</v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar
                  color="orange-darken-3"
                  title="Change security question"
                ></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">Coming Soon!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" class="text-capitalize" @click="isActive.value = false">Close</v-btn>
                  <v-btn class="bg-orange-darken-3 text-white text-capitalize">Save</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>

      <v-spacer class="my-8" />

      <!-- //? NOTIFICATION -->
      <h4>Notifications</h4>
      <v-row>
        <v-col cols="auto" md="4" sm="4">
          <v-dialog transition="dialog-top-transition" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn
                variant="plain"
                size="small"
                class="text-capitalize"
                v-bind="props"
                >Activate phone number</v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar
                  color="orange-darken-3"
                  title="Activate phone number"
                ></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">Coming Soon!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" class="text-capitalize" @click="isActive.value = false">Close</v-btn>
                  <v-btn class="bg-orange-darken-3 text-white text-capitalize">Save</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
        <v-col cols="12" md="4" sm="3">
          <v-dialog transition="dialog-top-transition" width="auto">
            <template v-slot:activator="{ props }">
              <v-btn
                variant="plain"
                size="small"
                class="text-capitalize"
                v-bind="props"
                >Activate email</v-btn
              >
            </template>
            <template v-slot:default="{ isActive }">
              <v-card>
                <v-toolbar color="orange-darken-3" title="Activate email"></v-toolbar>
                <v-card-text>
                  <div class="text-h2 pa-12">Coming Soon!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                  <v-btn variant="text" class="text-capitalize" @click="isActive.value = false">Close</v-btn>
                  <v-btn class="bg-orange-darken-3 text-white text-capitalize">Save</v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>

      <v-spacer class="my-8" />

      <v-row justify="space-around">
        <v-col cols="12" md="4" sm="3">
          <v-switch
            v-model="notify"
            color="orange-darken-3"
            label="Orders"
            value="Orders"
            hide-details
          />
        </v-col>
        <v-col cols="12" md="4" sm="3">
          <v-switch
            v-model="notify"
            color="orange-darken-3"
            label="Promotions"
            value="Promotions"
            hide-details
          />
        </v-col>
        <v-col cols="12" md="4" sm="3">
          <v-switch
            v-model="notify"
            color="orange-darken-3"
            label="Others"
            value="Others"
            hide-details
          />
        </v-col>
      </v-row>

      <v-spacer class="my-8" />

      <v-card class="mx-auto bg-orange-accent-1" max-width="344">
        <v-card-subtitle class="text-center text-wrap">
          Turn off the buttons to disable notifications
        </v-card-subtitle>
      </v-card>

      <v-spacer class="my-8" />

      <!-- //? SHOPPING -->
      <h4>Shipping address</h4>
      <v-dialog transition="dialog-top-transition" width="auto">
        <template v-slot:activator="{ props }">
          <v-btn
            color="orange-darken-3"
            size="small"
            prepend-icon="mdi-plus"
            class="text-capitalize my-3"
            v-bind="props"
            >Add new address</v-btn
          >
        </template>
        <template v-slot:default="{ isActive }">
          <v-card>
            <v-toolbar color="orange-darken-3" title="Add new address"></v-toolbar>
            <v-card-text>
              <div class="text-h2 pa-12">Coming Soon!</div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn variant="text" class="text-capitalize" @click="isActive.value = false">Close</v-btn>
              <v-btn class="bg-orange-darken-3 text-white text-capitalize">Save</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>

      <v-spacer class="my-8" />

      <v-row>
        <v-col cols="12" md="6" sm="7">
          <v-card class="elevation-5">
            <v-card-title style="font-size: 1rem">
              <v-icon>mdi-account</v-icon> Ade Mola, +234 813 543 3395
            </v-card-title>

            <v-card-text>
              <v-icon>mdi-map-marker</v-icon> Housing Estate, Surulere, Lagos Nigeria
            </v-card-text>

            <v-card-subtitle>
              Note: To receive your package, <br />
              please update this address
            </v-card-subtitle>

            <v-card-actions>
              <v-btn color="orange" class="text-decoration-none text-capitalize">
                Edit
              </v-btn>

              <v-spacer />

              <v-btn color="error" class="text-decoration-none text-capitalize">
                Delete
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<style lang="scss" scoped></style>

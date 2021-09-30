<template>
<v-main>
  <header-app />
<div>
    <v-card class="mx-auto" max-width="344" outlined shaped>
    <v-card-text>
        <div>Usuario # {{ user.id }}</div>
        <p class="text-h4 text--primary">
        {{ user.name }}
        </p>
    </v-card-text>
    <v-card-actions>
        <v-btn text color="grey darken-3" @click="reveal = true">
        Mirar más
        </v-btn>
    </v-card-actions>

    <v-expand-transition>
        <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%"
        outlined
        shaped
        >
        <v-card-text class="pb-0">
            <p class="text-h4 text--primary">Datos</p>
            <ul>
            <li>{{ user.cedula }}</li>
            <li>{{ user.contacto }}</li>
            <li>{{ user.email }}</li>
            </ul>
        </v-card-text>
        <v-card-actions class="pt-0">
            <v-btn text color="grey darken-3" @click="reveal = false">
            Cerrar
            </v-btn>
        </v-card-actions>
        </v-card>
    </v-expand-transition>
    </v-card>
</div>
</v-main>
</template>
<script>
import HeaderApp from '../HeaderApp.vue';
export default {
    components: { HeaderApp },
props: ["users", "active"],
data: () => ({
    reveal: false,
}),
};
</script>

<style>
</style>
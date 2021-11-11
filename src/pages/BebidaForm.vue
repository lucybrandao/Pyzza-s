<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col">
        <!-- Começar pedido -->
        <q-breadcrumbs class="bg-grey-3 q-pb-sm q-px-md q-mt-sm">
          <q-breadcrumbs-el label="Site" :to="{ name: 'home' }" />
          <q-breadcrumbs-el label="Admin" :to="{ name: 'admin-dashboard' }" />
          <q-breadcrumbs-el label="Listagem de Bebidas" :to="{ name: 'bebida-list' }" />
          <q-breadcrumbs-el label="Form de Bebida" />
        </q-breadcrumbs>
        <div class="text-h2 text-secondary q-my-md">Form Bebida</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'bebida-form',

  setup () {
    return {
      img1: require('src/assets/img1.png'),
      img2: require('src/assets/img2.png'),
      img3: require('src/assets/img3.png'),
      img4: require('src/assets/img4.jpg')
    }
  },

  methods: {
    toCardapio () {
      this.$router.push({ name: 'cardapio' })
    }
  }
})
</script>

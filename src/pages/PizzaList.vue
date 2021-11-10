<template>
  <q-page class="q-pa-md q-mb-lg">
    <div class="row justify-center">
      <div class="col">
        <!-- Começar pedido -->
        <div class="text-h2 text-secondary q-ml-lg q-mt-md">Listagem de Pizzas</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'pizza-list',

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

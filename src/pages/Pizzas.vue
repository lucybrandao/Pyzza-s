<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col col-md-10 col-lg-6 q-mb-lg">
        <span>loading: {{ loading }}</span>
        <!-- Breadcrumbs -->
        <q-breadcrumbs
          class="bg-primary q-pb-sm q-px-md q-mt-sm text-uppercase text-bold text-white"
          active-color="info"
        >
          <q-breadcrumbs-el label="Início" :to="{ name: 'home' }" />
          <q-breadcrumbs-el label="Cardápio" :to="{ name: 'cardapio' }" />
          <q-breadcrumbs-el label="Pizzas" />
        </q-breadcrumbs>

        <!-- Texto -->
        <div class="row">
          <div class="col col-lg-10">
            <p class="q-mt-md text-primary">Este é o nosso cardápio nacional. Para ver os produtos
            disponíveis na sua região,faça o login e insira o seu endereço. Encontre a loja mais próxima.</p>
          </div>
        </div>

        <!-- Pizzas -->
        <div class="row">
          <div v-for="(pizza, index) in pizzas" :key="index" class="col-4 q-pa-sm">
            <q-img :src="pizza.imagem" />
            <q-btn flat class="full-width bg-negative text-white text-bold q-py-sm q-my-sm">Adicionar ao Carrinho</q-btn>
            <div class="text-bold text-primary">{{ pizza.nome }}</div>
            <div class="text-caption text-grey-8 q-mb-md">{{ pizza.ingredientes }}</div>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ApiPizzas from 'src/api/pizzas.api.js'

export default defineComponent({
  name: 'cardapio-pizza-list',

  data: () => ({
    loading: true,
    pizzas: []
  }),

  methods: {
    getPizzas () {
      this.loading = true
      ApiPizzas.list().then((data) => {
        this.pizzas = data
        this.loading = false
      })
    }
  },

  created () {
    this.getPizzas()
  },

  setup () {
    return {}
  }
})
</script>

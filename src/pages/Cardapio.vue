<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col col-md-10 col-lg-6">
        <!-- Breadcrumbs -->
        <q-breadcrumbs
          class="bg-primary q-pb-sm q-px-md q-mt-sm text-uppercase text-bold text-white"
          active-color="info"
        >
          <q-breadcrumbs-el label="Início" :to="{ name: 'home' }" />
          <q-breadcrumbs-el label="Cardápio" />
        </q-breadcrumbs>

        <!-- Texto -->
        <div class="row">
          <div class="col col-lg-10">
            <p class="q-mt-md text-primary">Este é o nosso cardápio nacional. Para ver os produtos
            disponíveis na sua região,faça o login e insira o seu endereço. Encontre a loja mais próxima.</p>
          </div>
        </div>

        <!-- Categorias -->
        <div v-for="(categoria, index) in categorias" :key="index">
          <q-card flat bordered square @click="to(categoria.to)" class="my-card bg-grey-1 text-primary">
            <q-card-section horizontal>
              <q-img class="col-2" :src="categoria.img" />
              <div class="row items-center">
                <div class="col">
                  <div class="text-h5 text-bold text-uppercase q-pl-md">{{ categoria.nome }}</div>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cardapio',

  setup () {
    return {
      categorias: [
        {
          value: 1,
          nome: 'Pizzas',
          img: require('src/assets/cardapio_pizza.png'),
          to: 'cardapio-pizza-list'
        },
        {
          value: 2,
          nome: 'Sobremesas',
          img: require('src/assets/cardapio_sobremesa.png'),
          to: 'cardapio-sobremesa-list'
        },
        {
          value: 3,
          nome: 'Bebidas',
          img: require('src/assets/cardapio_bebida.png'),
          to: 'cardapio-bebida-list'
        }
      ]
    }
  },

  methods: {
    to (categoria) {
      this.$router.push({ name: categoria })
    }
  }
})
</script>

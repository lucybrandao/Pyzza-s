<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col col-md-10 col-lg-6 q-mb-lg">
        <!-- Começar pedido -->
        <q-card flat class="my-card bg-primary text-white">
          <q-card-section>
            <div class="row items-center">
              <div class="col col-lg-6 text-center">
                <div class="text-h5 text-bold text-uppercase">Começar o Pedido</div>
              </div>
              <div class="col col-lg-6">
                <div class="row justify-around items-center">
                  <q-btn flat class="bg-negative text-white text-bold q-px-xl q-py-sm">Entrega</q-btn>
                  <div class="text-h6 text-bold text-blue-grey-4 text-italic">ou</div>
                  <q-btn flat class="bg-negative text-white text-bold q-px-xl q-py-sm">Retirar na Loja</q-btn>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <!-- Texto -->
        <p class="q-mt-md text-primary text-bold">Este é o nosso cardápio nacional. Para ver os produtos
        disponíveis na sua região,faça o login e insira o seu endereço. Encontre a loja mais próxima.</p>

        <q-card flat bordered square class="q-mt-md bg-primary text-white">
          <q-card-section horizontal>
            <div class="row items-center">
              <div class="col">
                <div class="text-h6 text-bold text-uppercase q-pl-md">Início / Cardápio</div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <!-- Categorias -->
        <div v-for="(categoria, index) in categorias" :key="index">
          <q-card flat bordered square @click="to(categoria.to)" class="my-card q-my-md bg-grey-1 text-primary">
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

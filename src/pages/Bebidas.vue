<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col col-md-10 col-lg-6 q-mb-lg">
        <!-- Começar pedido -->
        <q-breadcrumbs
          class="bg-primary q-pb-sm q-px-md q-mt-sm text-uppercase text-bold text-white"
          active-color="info"
        >
          <q-breadcrumbs-el label="Início" :to="{ name: 'home' }" />
          <q-breadcrumbs-el label="Cardápio" :to="{ name: 'cardapio' }" />
          <q-breadcrumbs-el label="Bebidas" />
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
          <div v-for="(bebida, index) in bebidas" :key="index" class="col-4 q-pa-sm">
            <q-img :src="bebida.img" />
            <q-btn flat class="full-width bg-negative text-white text-bold q-py-sm q-my-sm">Adicionar ao Carrinho</q-btn>
            <div class="text-bold text-primary q-mb-md">{{ bebida.nome }}</div>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'cardapio-bebida-list',

  setup () {
    return {
      bebidas: [
        {
          value: 1,
          nome: 'Coca Cola',
          img: require('src/assets/bebida1.jpg')
        },
        {
          value: 2,
          nome: 'Coca Cola Zero',
          img: require('src/assets/bebida2.jpg')
        },
        {
          value: 3,
          nome: 'Fanta Laranja',
          img: require('src/assets/bebida3.jpg')
        },
        {
          value: 4,
          nome: 'Fanta Uva',
          img: require('src/assets/bebida4.jpg')
        },
        {
          value: 5,
          nome: 'Fanta guaraná',
          img: require('src/assets/bebida5.jpg')
        },
        {
          value: 6,
          nome: 'Ice Tea Limão',
          img: require('src/assets/bebida6.jpg')
        },
        {
          value: 7,
          nome: 'Água',
          img: require('src/assets/bebida7.jpg')
        }
      ]
    }
  }
})
</script>

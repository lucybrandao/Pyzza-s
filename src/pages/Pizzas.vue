<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col col-md-10 col-lg-6 q-mb-lg">
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
            <q-img :src="pizza.img" />
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

export default defineComponent({
  name: 'cardapio-pizza-list',

  setup () {
    return {
      pizzas: [
        {
          value: 1,
          nome: 'Frango com Requeijão',
          ingredientes: 'Frango desfiado, cebola, oregano e requeijão.',
          img: require('src/assets/pizza1.jpg')
        },
        {
          value: 2,
          nome: 'Bauru',
          ingredientes: 'Mussarela, presunto, requeijão, oregano e tomate.',
          img: require('src/assets/pizza2.jpg')
        },
        {
          value: 3,
          nome: 'Calabresa',
          ingredientes: 'Mussarela, calabresa e cebola, oregano.',
          img: require('src/assets/pizza3.jpg')
        },
        {
          value: 4,
          nome: 'Catuperoni',
          ingredientes: 'Mussarela, pepperoni, requeijão, oregano e parmesão ralado.',
          img: require('src/assets/pizza4.jpg')
        },
        {
          value: 5,
          nome: 'Mussarela',
          ingredientes: 'Queijo mussarela e oregano.',
          img: require('src/assets/pizza5.jpg')
        },
        {
          value: 6,
          nome: 'Margherita',
          ingredientes: 'Mussarela, tomate, oregano e manjericão.',
          img: require('src/assets/pizza6.jpg')
        },
        {
          value: 7,
          nome: 'Pepperoni',
          ingredientes: 'Mussarela, oregano e pepperoni.',
          img: require('src/assets/pizza7.jpg')
        }
      ]
    }
  }
})
</script>

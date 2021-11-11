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
          <q-breadcrumbs-el label="Sobremesas" />
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
          <div v-for="(sobremesa, index) in sobremesas" :key="index" class="col-4 q-pa-sm">
            <q-img :src="sobremesa.img" />
            <q-btn flat class="full-width bg-negative text-white text-bold q-py-sm q-my-sm">Adicionar ao Carrinho</q-btn>
            <div class="text-bold text-primary">{{ sobremesa.nome }}</div>
            <div class="text-caption text-grey-8 q-mb-md">{{ sobremesa.ingredientes }}</div>
          </div>
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'cardapio-sobremesa-list',

  setup () {
    return {
      sobremesas: [
        {
          value: 1,
          nome: 'Churrosbread',
          ingredientes: 'Nossa saborosa massa recheada de muito doce de leite, coberta de açúcar e canela.',
          img: require('src/assets/sobremesa1.jpg')
        },
        {
          value: 2,
          nome: 'Chocobread',
          ingredientes: 'Massa deliciosa massa recheada de muito chocolate e cobertura de creme de baunilha com granulado.',
          img: require('src/assets/sobremesa2.jpg')
        },
        {
          value: 3,
          nome: 'Brotinho de Brigadeiro',
          ingredientes: 'Brotinho de brigadeiro com creme de baunilha ,brigadeiro de chocolate e granulado.',
          img: require('src/assets/sobremesa3.jpg')
        },
        {
          value: 4,
          nome: 'Brotinho de Ovomaltine®',
          ingredientes: 'Brotinho recheada com creme de baunilha e creme de Ovomaltine® crocante.',
          img: require('src/assets/sobremesa4.jpg')
        },
        {
          value: 5,
          nome: 'Brotinho Laka Oreo',
          ingredientes: 'Brotinho coberta com chocolate Laka Oreo cremoso.',
          img: require('src/assets/sobremesa5.jpg')
        }
      ]
    }
  }
})
</script>

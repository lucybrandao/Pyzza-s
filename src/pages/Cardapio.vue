<template>
  <q-page class="q-pa-md q-mb-lg">
    <div class="row justify-center">
      <div class="col-6 q-mb-lg">
        <!-- Começar pedido -->
        <q-card flat class="my-card bg-primary text-white">
          <q-card-section>
            <div class="row items-center">
              <div class="col-6 text-center">
                <div class="text-h5 text-bold text-uppercase">Começar o Pedido</div>
              </div>
              <div class="col-6">
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
        <!-- Categorias -->
        <q-card flat bordered square class="my-card q-my-md bg-grey-1 text-primary">
          <q-card-section horizontal>
            <q-img class="col-2" :src="pizza" />
            <div class="row items-center">
              <div class="col">
                <div class="text-h5 text-bold text-uppercase q-pl-md">Pizzas</div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card flat bordered square class="my-card q-my-md bg-grey-1 text-primary">
          <q-card-section horizontal>
            <q-img class="col-2" :src="sobremesa" />
            <div class="row items-center">
              <div class="col">
                <div class="text-h5 text-bold text-uppercase q-pl-md">Sobremesas</div>
              </div>
            </div>
          </q-card-section>
        </q-card>

        <q-card flat bordered square class="my-card q-my-md bg-grey-1 text-primary">
          <q-card-section horizontal>
            <q-img class="col-2" :src="bebida" />
            <div class="row items-center">
              <div class="col">
                <div class="text-h5 text-bold text-uppercase q-pl-md">Bebidas</div>
              </div>
            </div>
          </q-card-section>
        </q-card>

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
      pizza: require('src/assets/cardapio_pizza.png'),
      sobremesa: require('src/assets/cardapio_sobremesa.png'),
      bebida: require('src/assets/cardapio_bebida.png')
    }
  }
})
</script>

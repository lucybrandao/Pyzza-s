<template>
  <q-page class="q-pa-md q-mb-lg">
    <div class="row justify-center">
      <div class="col-6">
        <!-- Começar pedido -->
        <div class="row items-center justify-between">
          <div class="text-h1 text-blue-grey-1">—</div>
          <div class="text-h5 text-bold text-primary text-uppercase">Começar pedido</div>
          <q-btn flat class="bg-negative text-white text-bold q-px-xl q-py-sm">Entrega</q-btn>
          <div class="text-h6 text-bold text-blue-grey-4 text-italic">ou</div>
          <q-btn flat class="bg-negative text-white text-bold q-px-xl q-py-sm">Retirar na Loja</q-btn>
          <div class="text-h1 text-blue-grey-1">—</div>
        </div>
        <!-- Imgs -->
        <div class="row">
          <div class="col-9 q-pr-sm">
            <q-img :src="img1" class="home-img-lg" />
          </div>
          <div class="col-3 q-pl-sm">
            <q-img :src="img2" class="home-img-sm q-mb-md" />
            <q-img :src="img3" class="home-img-sm q-mb-md" />
          </div>
        </div>
        <div class="row" style="margin-top: -30px">
          <div class="col-12">
            <q-img :src="img4" class="home-img-md" />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageIndex',

  setup () {
    return {
      img1: require('src/assets/img1.png'),
      img2: require('src/assets/img2.png'),
      img3: require('src/assets/img3.png'),
      img4: require('src/assets/img4.jpg')
    }
  }
})
</script>

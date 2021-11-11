<template>
  <q-page class="q-pa-md">
    <div class="row justify-center">
      <div class="col">
        <!-- Começar pedido -->
        <q-breadcrumbs class="bg-grey-3 q-pb-sm q-px-md q-mt-sm">
          <q-breadcrumbs-el label="Início" :to="{ name: 'home' }" />
          <q-breadcrumbs-el label="Admin" :to="{ name: 'admin-dashboard' }" />
          <q-breadcrumbs-el label="Listagem de Usuários" :to="{ name: 'usuario-list' }" />
          <q-breadcrumbs-el label="Form de Usuário" />
        </q-breadcrumbs>
        <div class="text-h2 text-secondary q-my-md">Form do Usuário</div>
        <q-card>
          <q-card-section>
            <div class="row q-mb-md">
              <q-input outlined v-model="text" label="Nome Completo" class="col-3" />
            </div>
            <div class="row q-my-md">
              <q-input outlined v-model="text" label="Data de Nascimento" class="col-2" />
            </div>
            <div class="row q-mt-md">
              <q-input outlined v-model="text" label="Cargo" class="col-2" />
            </div>
            <div class="row q-gutter-md q-mt-sm">
              <q-btn outline color="primary" label="Voltar" :to="{ name: 'usuario-list' }" />
              <q-btn color="positive" label="Salvar" @click="salvar()" />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'usuario-form',

  setup () {
    const $q = useQuasar()

    return {
      text: ref(''),
      salvar () {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Usuário salvo com sucesso'
        })
        this.$router.push({ name: 'usuario-list' })
      }
    }
  }
})
</script>

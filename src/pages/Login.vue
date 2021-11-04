<template>
  <q-page class="q-pa-md q-mb-lg">
    <div class="row justify-center">
      <div class="col-6 q-mb-lg">
        <!-- Começar pedido -->
        <div class="row items-center">
          <div class="col text-center">
            <div class="text-h3 text-bold text-uppercase text-primary q-my-md">Login</div>
          </div>
        </div>
        <div class="row justify-center">
          <q-form
            @submit="onSubmit"
            class="col col-md-7 col-lg-6 q-gutter-md q-my-md"
          >
            <q-input
              filled
              v-model="name"
              label="Nome"
              hint="Nome e Sobrenome"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Por favor, escreva algo']"
            />

            <q-input
              filled
              type="password"
              v-model="age"
              label="Senha"
              hint="Pelo menos 4 dígitos"
              lazy-rules
              :rules="[ val => val && val.length > 3 || 'A senha precisa ter pelo menos 4 dígitos']"
            />

            <div>
              <q-btn label="Entrar" type="submit" color="primary" class="full-width q-mb-md" />
              <q-btn
                @click="toCadastro()"
                label="Não tem conta? Cadastre-se!"
                type="buttom"
                color="primary"
                outline
                class="full-width q-ml-sm"
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from 'quasar'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',

  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    return {
      name,
      age,

      onSubmit () {
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Cadastrado'
        })
      },

      toCadastro () {
        this.$router.push({ name: 'cadastro' })
      }
    }
  },

  methods: {
    to (categoria) {
      this.$router.push({ name: categoria })
    }
  }
})
</script>

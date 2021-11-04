<template>
  <q-page class="q-pa-md q-mb-lg">
    <div class="row justify-center">
      <div class="col-6 q-mb-lg">
        <!-- Cadastro -->
        <div class="row justify-center">
          <div class="col col-md-7 col-lg-6">
            <q-btn @click="toLogin()" color="primary" flat class="full-width q-ml-sm">
              <i class="fas fa-arrow-left q-mr-md"></i> Voltar para Login
            </q-btn>
          </div>
        </div>
        <div class="row items-center">
          <div class="col text-center">
            <div class="text-h3 text-bold text-uppercase text-primary q-my-md">Cadastro</div>
          </div>
        </div>
        <div class="row justify-center">
          <q-form
            @submit="onSubmit"
            @reset="onReset"
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

            <q-toggle v-model="accept" label="Concordo com os termos e licença" />

            <div>
              <q-btn label="Cadastrar" type="submit" color="primary"/>
              <q-btn label="Limpar Campos" type="reset" color="primary" flat class="q-ml-sm" />
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
    const accept = ref(false)
    return {
      name,
      age,
      accept,

      onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Você precisa aceitar os termos e licenças antes'
          })
        } else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Cadastrado'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
        accept.value = false
      }
    }
  },

  methods: {
    toLogin () {
      this.$router.push({ name: 'login' })
    }
  }
})
</script>

<template>
  <DefaultLayout>

    <h1 class="font-bold text-center mt-32 mb-10">Welcome, friend.</h1>

    <About class="flex-1 mx-auto"/>

  </DefaultLayout>
</template>



<script>
import SignupForm from '~/components/SignupForm.vue'
import About from '~/components/About.vue'

export default {
  components: { SignupForm, About }
}
</script>

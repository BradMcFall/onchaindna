<template>
  <div class="sell">
    <h1>You have three mutations you may want to sell...</h1>
    <UserForm msg="Enter a username and password and click to obtain a funded MDNANFT wallet."/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import UserForm from '@/components/UserForm.vue'

@Options({
  components: {
    UserForm
  }
})

export default class Sell extends Vue {}
</script>

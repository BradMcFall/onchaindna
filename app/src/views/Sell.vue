
<template>
  <div class="sell">
 <a @click="handleClick()">Click me!</a>
    <h1>You have three mutations you may want to sell...</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({
  components: {
  },
  methods: {
    handleClick: function () {
      alert('test')
    }
  }
})
export default class Sell extends Vue {}

</script>

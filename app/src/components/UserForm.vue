<template>
  <div class="userform">
    <h1>{{msg}}</h1>
     <p> To get started, enter a username and password and click to create a funded wallet.
     </p>
     <form @submit="checkForm">
      <ul>
        <li>
      <input type="text" v-model="username" required="required"
             placeholder="username" />
        </li>
        <li>
      <input type="text" v-model="password" required="required"
             placeholder="password" />
        </li>
        <li>
      <button type="submit">Create Wallet</button>
        </li>
      </ul>
    </form>

  </div>
</template>
<script>
export default {
  name: 'createUser',
  data: function () {
    return {
      //      username: this.$store.state.loginEmail,// do not want to use actual email as network user name
      username: '',
      password: ''
    }
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault()
      this.$parent.$parent.handleCreateUser(this.username, this.password)
      this.username = ''
      this.password = ''
    }
  }
}
</script>
<style scoped>
.userForm{
}
.userForm ul li{
  display:block;
  padding:3px;
}
button{
  padding:3px;
}
</style>

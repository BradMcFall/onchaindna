<template>
  <div class="userform">
    <h1>{{msg}}</h1>
     <p> Your wallet address contains 1 AVAX and you can view it's contents at
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
      <button type="submit">Create User</button>
        </li>
      </ul>
    </form>

  </div>
</template>

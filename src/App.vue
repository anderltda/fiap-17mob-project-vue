<template>
  <div id="app">
    <div id="nav" style="display: none">
      <router-link to="/home">Home</router-link> |
      <router-link to="/profile">Profile</router-link> |
      <router-link to="/address">Address</router-link> |
      <router-link to="/logout">Logout</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <router-view />
</template>

<script>
export default {
  name: "App",

  provide: {
    appName: "Vue-Quiz",
  },
};
</script>

<style lang="scss">
:root {
  --bg-color: #121113;
  --primary-color: #42b983;
  --primary-outline-color: #6feeb5;
  --menu-bg-color: #272627;
  --card-bg-color: #1f1f1e;
}

* {
  box-sizing: border-box;
}

body {
  background: var(--bg-color);
  color: #fff;
  height: 100vh;
  position: relative;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

<script setup lang="ts">
</script>

<template>
  <div>
    <RouterView />
  </div>
</template>

<style lang="scss">
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
  font-family: 'Noto Sans';
  font-size: 1.15rem;
  overflow-x: hidden;
}
</style>

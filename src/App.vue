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
  overflow: auto;
  font-family: 'JetBrains Mono';
}

#app {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 5px;
  box-sizing: border-box;
}

</style>

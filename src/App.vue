<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
.fade-enter-active { transition: opacity 1s }
.fade-enter,
.fade-leave-to { opacity: 0 }
@import '@/assets/scss/reset.scss';
</style>

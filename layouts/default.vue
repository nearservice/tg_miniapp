<script setup lang="ts">

</script>

<template>
  <div class="layout" id="layout">
    <div class="layout-body">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  height: 100vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;

  &-body {
    padding: 44px 0;
    min-height: calc(100vh + 1px);
    height: auto;
  }

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
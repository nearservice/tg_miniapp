<script setup lang="ts">
onMounted(() => {
  const webAppStore = useWebAppStore()

  webAppStore.initWebApp()
  if (webAppStore.webApp) {
    webAppStore.webApp.expand()
  }
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

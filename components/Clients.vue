<script setup lang="ts">
import type {Client} from "~/types/page";

const props = defineProps<{
  clients: Client[]
}>()
</script>

<template>
<div class="grid grid-cols-3 gap-[0.0625rem]">
  <NuxtLink v-for="client in clients" :to="client.link">
    <div class="flex justify-center items-center w-full h-11 rounded-2xl bg-white/[.15]">
      <NuxtImg provider="s3Provider" format="webp" :src="client.logo"  class="max-w-[65%] max-h-[45%] object-contain"/>
    </div>
  </NuxtLink>
</div>
</template>

<style scoped lang="scss">

</style>
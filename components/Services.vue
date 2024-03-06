<script setup lang="ts">
import type {Service} from "~/types/page";

const props = defineProps<{
  services: Service[]
}>()
</script>

<template>
  <div
      ref="carousel"
      class="scrollbar flex flex-nowrap gap-1 px-6 overflow-x-scroll overflow-y-hidden scroll-smooth"
  >
    <NuxtLink v-for="service in services" to="https://t.me/ooovotetoda">
      <NuxtImg
          provider="s3Provider"
          format="webp"
          class="min-w-25 max-w-25 transition active:scale-95"
          width="100"
          height="100"
          :src="service.image"
          alt="service"
      />
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
<script setup lang="ts">
const { data: page } = useFetch("/api/get-page")
</script>

<template>
      <header class="mb-8 text-center text-white font-mazzard">
        <div class="container mx-auto px-6">
          <div class="text-center mb-8">
            <NuxtImg provider="s3Provider" class="mx-auto w-[3.75em]" :src="page?.info.logo" alt="logo"/>
          </div>

          <!-- TODO: тут ещё можно подумать font-normal или font-medium и потом удалить неиспользуемый     -->
          <h1 class="mb-3 text-4xl font-medium leading-none tracking-[.0125em]">{{ page?.info.title }}</h1>
          <h4 class="mb-6 text-base font-light font-soft">{{ page?.info.description }}</h4>

          <div class="flex gap-1.5">
            <button
                class="flex-1 border border-white rounded-3xl uppercase text-xs font-medium leading-10 bg-white/[.15] active:scale-95 transition"
              >{{ page?.info.first_button ?? "Поработать с нами" }}</button>
            <NuxtLink to="https://t.me/DashaiLisichki"
                class="flex-1 border border-white rounded-3xl uppercase text-xs font-medium leading-10 bg-white/[.15] active:scale-95 transition"
            >{{ page?.info.second_button ?? "Позвать в тендер"}}</NuxtLink>
          </div>
        </div>
      </header>

      <main class="mb-8 text-white font-semibold">
        <section class="mb-8">
          <div class="container mx-auto">
            <h5 class="mb-5 px-6">Что мы делаем</h5>
            <Services :services="page?.services ?? []"/>
          </div>
        </section>

        <section>
          <div class="container mx-auto px-6">
            <h5 class="mb-5">Уже наши клиенты</h5>
            <Clients :clients="page?.clients ?? []"/>
          </div>
        </section>
      </main>

  <footer>
    <h1 class="py-4 text-center text-white font-mazzard text-4xl">{{ page.info.slogan }}</h1>
  </footer>
</template>

<style scoped lang="scss">

</style>
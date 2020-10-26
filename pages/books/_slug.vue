<template>
  <div>
    <div class="banner" :class="[`banner--${page.category}`]">
      <div
        class="container flex items-center justify-around h-full px-4 py-8 mx-auto"
      >
        <IconBase :icon-name="page.category" class="h-full" />
        <div class="text-center">
          <h1 class="text-5xl" v-text="page.title" />
          <h1 class="text-3xl" v-text="page.author" />
        </div>
      </div>
    </div>
    <main class="bg-main">
      <nuxt-content :document="page" class="container px-8" />
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('books', params.slug).fetch()

    return { page }
  },
}
</script>

<style scoped>
.banner {
  @apply w-full h-56;
}
.banner--fantasy {
  @apply bg-gradient-to-r from-fantasy-dark via-fantasy-light to-fantasy-dark;
}
.banner--scifi {
  @apply bg-gradient-to-r from-scifi-dark via-scifi-light to-scifi-dark;
}
.banner--horror {
  @apply bg-gradient-to-r from-horror-dark via-horror-light to-horror-dark;
}
</style>
<style>
.nuxt-content-editor,
.nuxt-content-container {
  @apply bg-transparent;
}
.bg-main {
  background: radial-gradient(circle closest-side, #572361, #17162e);
}
</style>

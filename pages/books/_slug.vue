<template>
  <div class="flex flex-col h-full overflow-auto">
    <div class="flex-none banner" :class="[`bg--${page.category}`]">
      <div
        class="container flex items-center justify-around flex-grow h-full px-4 py-8 mx-auto"
      >
        <IconBase :icon-name="page.category" class="h-full" />
        <div class="text-center" :class="[`text-${page.category}`]">
          <h1 class="text-5xl" v-text="page.title" />
          <h1 class="text-3xl" v-text="page.author" />
        </div>
      </div>
    </div>
    <article class="container flex-1 py-12 mx-auto bg-main">
      <nuxt-content
        :document="page"
        class="px-8 mx-auto prose text-center text-white"
        :class="[`prose-${page.category}`]"
      />
    </article>
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
.bg--fantasy {
  @apply bg-gradient-to-r from-fantasy-dark via-fantasy-light to-fantasy-dark;
}
.bg--scifi {
  @apply bg-gradient-to-r from-scifi-dark via-scifi-light to-scifi-dark;
}
.bg--horror {
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

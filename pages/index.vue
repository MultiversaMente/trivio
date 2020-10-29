<template>
  <div class="container mx-auto">
    <main class="relative h-full py-8 bg-main">
      <raindrops class="pointer-events-none" />
      <div class="z-10 flex flex-col md:flex-row">
        <div class="flex justify-center p-10 md:w-1/2">
          <IconBase icon-name="trivio" class="h-full text-white" />
        </div>
        <book-list class="flex flex-col p-10 md:w-1/2" :books="books" />
      </div>
    </main>
  </div>
</template>

<script>
import BookList from '@/components/BookList/BookList'
import Raindrops from '@/components/Raindrops'
export default {
  components: { 'book-list': BookList, raindrops: Raindrops },
  async asyncData({ $content }) {
    const books = await $content('books')
      .only(['title', 'category', 'author', 'slug'])
      .fetch()

    return { books }
  },
}
</script>

<style>
.bg-main {
  background: radial-gradient(circle closest-side, #572361, #17162e);
  @apply overflow-hidden;
}

/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

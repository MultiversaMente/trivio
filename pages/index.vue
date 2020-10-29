<template>
  <div class="container mx-auto">
    <main class="relative h-full py-8 bg-main">
      <raindrops />
      <div class="z-10 flex flex-col sm:flex-row">
        <IconBase icon-name="trivio" class="flex-1 text-white" />
        <book-list :books="books" />
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

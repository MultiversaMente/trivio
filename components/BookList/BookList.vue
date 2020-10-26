<template>
  <div class="flex flex-col justify-between flex-1 p-10">
    <book-label
      v-for="(book, i) in books"
      :key="book.title"
      v-bind="book"
      :index="i"
    />
  </div>
</template>

<script>
// import BookLabel from './BookLabel'
export default {
  props: {
    books: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

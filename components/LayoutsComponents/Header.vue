<template>
  <header
    class="fixed inset-x-0 top-0 z-20 flex-none h-16 text-white bg-brand-dark"
  >
    <nav
      class="container flex items-center justify-between h-16 mx-auto border-b border-brand-light"
    >
      <nuxt-link to="/" class="h-full">
        <IconBase icon-name="trivio" class="h-full px-4 py-2 text-white" />
      </nuxt-link>
      <div class="flex items-center justify-between">
        <mailing-list />
      </div>
    </nav>
  </header>
</template>

<script>
import MailingList from '@/components/MailingList'
export default {
  components: { 'mailing-list': MailingList },
}
</script>

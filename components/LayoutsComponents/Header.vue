<template>
  <header class="container flex-none mx-auto text-white">
    <nav class="flex items-center justify-between h-16">
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

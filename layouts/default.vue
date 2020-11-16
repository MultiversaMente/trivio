<template>
  <div class="flex flex-col min-h-screen">
    <app-header class="flex-none" />
    <Nuxt class="pt-16" />
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/LayoutsComponents/Header'
import Footer from '@/components/LayoutsComponents/Footer'

export default {
  components: { 'app-header': Header, 'app-footer': Footer },
}
</script>

<template>
  <div
    class="flex flex-col h-screen overflow-auto text-white app-body bg-brand-dark"
  >
    <app-header />
    <Nuxt class="flex-1" />
  </div>
</template>

<script>
import Header from '@/components/LayoutsComponents/Header'
export default {
  components: { 'app-header': Header },
}
</script>

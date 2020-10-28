<template>
  <div
    class="flex flex-col h-screen overflow-auto overflow-hidden text-white app-body bg-brand-dark"
  >
    <app-header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/LayoutsComponents/Header'
export default {
  components: { 'app-header': Header },
}
</script>

<template>
  <div class="flex flex-col h-screen overflow-auto app-body bg-brand-dark">
    <header class="container flex-none mx-auto text-white">
      <nav class="flex items-center justify-between h-16">
        <IconBase icon-name="trivio" class="h-full px-4 py-2 text-white" />

        <div class="flex items-center justify-between">
          <div class="px-4">Menu</div>
          <div class="px-4">search</div>
        </div>
      </nav>
    </header>
    <Nuxt class="flex-1" />
  </div>
</template>

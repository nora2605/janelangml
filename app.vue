<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: 'Janelang.ml',
  setup() {
    useHead({
      title: 'Janelang.ml',
      meta: [
        { name: 'description', content: 'Jane language homepage' }
      ]
    })
  }
}
</script>

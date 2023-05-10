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
        { name: 'description', content: 'Jane Language Home' }
      ],
      script: [
        { src: "/highlight.js" }
      ],
    })
  }
}
</script>

<style src="./assets/css/highlight.css" />
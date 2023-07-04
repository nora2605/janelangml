<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: 'jane.luemir.xyz',
  setup() {
    useHead({
      title: 'jane.luemir.xyz',
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
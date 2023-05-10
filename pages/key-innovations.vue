<template>
    <main class="p-10 prose prose-lg prose-invert" >
        <ContentDoc />
    </main>
</template>

<script>
export default {
  mounted() {
    useHead({
      script: [
        { textContent: 'hljs.highlightAll();' },
      ],
    });
  },
};
</script>

import { ClientOnly, ServerPlaceholder } from '../.nuxt/components';
<template>
  <div
    class="codeblock text-lg my-6 p-2 bg-gray-900 text-white rounded-md font-instrument-sans"
  >
    <img width="20" height="20" class="inline" src="janelogo.svg" />{{
      " " + filename
    }}
    <a :onclick="ctc(code)" href="#" class="text-gray-500 text-sm hover:underline">copy</a>
    <pre
      class="code font-maple-mono language-jane"
    ><code v-for="line in code.split('\n')">{{ line + '\n' }}</code></pre>
  </div>
</template>

<script>
export default (await import('vue')).defineComponent({
  name: "Codeblock",
  props: {
    code: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: false,
      default: "main.jn",
    },
  },
  mounted() {
    useHead({
        script: [
            { textContent: "hljs.highlightAll();" }
        ]
    })
  },
  methods: {
    async ctc(txt) {
        if (process.client) {
            await navigator.clipboard.writeText(txt);
        }
    }
  }
});
</script>
<template>
  <div
    class="codeblock text-lg my-6 p-2 bg-gray-900 text-white rounded-md max-w-lg font-instrument-sans"
  >
    <header
      class="justify-between flex items-center px-2 border rounded-md border-gray-400"
    >
      <div>
        <img width="20" height="20" class="inline mr-2" src="/janelogo.svg" />{{
          filename
        }}
      </div>
      <button
        class="copybutton text-right text-gray-500 text-sm hover:underline"
      >
        copy
      </button>
    </header>
    <pre
      class="code font-maple-mono language-jane"
    ><code v-for="line in code.replace(/\r/g, '').split('\n')">{{ line + '\n' }}</code></pre>
  </div>
</template>

<script>
export default {
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
    this.$nextTick(() => {
      hljs.highlightAll();
    });
    // hack :sunglasses:
    Array.from(document.getElementsByClassName("copybutton")).forEach((b) => {
      b.onclick = () => {
        navigator.clipboard.writeText(this.code);
      };
    });
  },
  updated() {
    this.$nextTick(() => {
      hljs.highlightAll();
    });
  },
};
</script>

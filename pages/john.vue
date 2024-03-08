<template>
  <div class="flex flex-col md:flex-row">
    <div class="md:w-1/2">
      <h1 class="text-4xl font-bold mb-6">JOHN: Jane's Object Hierarchy Notation</h1>
      <p class="text-gray-700 mb-8">
        John is a very powerful Object Notation Language for config files and data serialization.
        You can use it in other languages as well!
      </p>
      <CodeBlock filename="config.john" :code="mcode"></CodeBlock>
      <div class="flex mb-6">
        <a href="https://github.com/nora2605/jane/blob/main/john.md" target="_blank" rel="noopener noreferrer"
          class="bg-pink-400 hover:bg-pink-600 text-white py-2 px-4 rounded-md mr-4">
          GitHub Repository
        </a>
      </div>
    </div>
    <div class="md:w-1/2">
      <img src="/johnlogo.svg" alt="IDA - Jane Language Mascot" class="w-full p-4 drop-shadow-[0_0_30px_#fe00bc44] rounded-lg m-4" />
    </div>
  </div>
</template>

<script setup>
import mcode from '~/assets/snippets/ExampleConfig.john?raw'
</script>
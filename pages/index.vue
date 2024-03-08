<template>
  <div class="flex flex-col md:flex-row max-w-4xl">
    <div class="md:w-1/2">
      <h1 class="text-4xl font-bold mb-6">Welcome to the Jane Language</h1>
      <p class="text-gray-700 mb-8">
        Jane is a programming language aiming to bridge the gap between
        small utility scripts and complex real-world applications. It
        features a readable and expressive syntax inspired by languages
        including Swift and Haskell.
      </p>
      <router-link to="/key-innovations" class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md mr-4">
        Check out what makes it special
      </router-link>
      <CodeBlock filename="hello.jn" :code="mcode"></CodeBlock>
      <div class="flex mb-6">
        <a href="https://github.com/nora2605/jane" target="_blank" rel="noopener noreferrer"
          class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md mr-4">
          GitHub Repository
        </a>
        <router-link to="/getting-started" class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md">
          Getting Started
        </router-link>
      </div>
      <p class="text-gray-700">
        Learn the powerful John notation language used in Jane programming.
      </p>
      <router-link to="/john" class="text-teal-500 hover:underline mt-2">
        Learn more about John
      </router-link>
    </div>
    <div class="md:w-1/2">
      <img src="~/assets/img/ida_home.png" alt="IDA - Jane Language Mascot" class="w-full p-4 rounded-lg m-4 filter drop-shadow-[0_0_30px_#222222]" />
    </div>
  </div>
</template>

<script setup>
import mcode from '~/assets/snippets/HelloWorld.jn?raw'
</script>
<template>
  <div class="flex flex-col flex-grow items-center justify-evenly">
    <div class="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 md:p-16">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
          <h1 class="text-4xl font-bold mb-6">Welcome to the Jane Language</h1>
          <p class="text-gray-700 mb-8">
            Jane is a programming language aiming to bridge the gap between
            small utility scripts and complex real-world applications. It
            features a readable and expressive syntax inspired by languages
            including Swift and Haskell.
          </p>
          <CodeBlock filename="hello.jn" :code="mcode"></CodeBlock>
          <div class="flex mb-6">
            <a
              href="https://github.com/nora2605/jane"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md mr-4"
            >
              GitHub Repository
            </a>
            <router-link
              to="/getting-started"
              class="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md"
            >
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
          <img
            src="~/assets/img/ida_home.png"
            alt="IDA - Jane Language Mascot"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
var { data: mcode } = await useFetch(
  "http://localhost:3000/snippets/HelloWorld.jn"
);
mcode = mcode['_rawValue'].replace(/\r/g, '');
</script>

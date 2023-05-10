<template>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold mb-6">Getting Started</h1>
      <div class="max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-4">Interactive Tutorial</h2>
        <p class="mb-4">Learn the basics of Jane language through an interactive tutorial.</p>
        <!-- Replace the following code with your own interactive tutorial component -->
        <div class="border border-gray-300 rounded-md p-4 mb-6">
          <CodeBlock code="your code here" filename="tutorial.jane" />
        </div>
        <h2 class="text-2xl font-bold mb-4">Documentation</h2>
        <p class="mb-4">Explore the comprehensive documentation for Jane language.</p>
        <router-link to="/docs" class="text-teal-500 hover:underline">View Documentation</router-link>
        <h2 class="text-2xl font-bold mt-6 mb-4">Downloads</h2>
        <p class="mb-4">Download the latest version of Jane language.</p>
        <a href="/dl" class="text-teal-500 hover:underline">Download Jane</a>
      </div>
    </div>
  </template>

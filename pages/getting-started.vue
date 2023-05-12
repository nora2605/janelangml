<template>
    <div class="flex py-8 md:px-8 flex-grow flex-col items-center justify-center">
      <h1 class="text-4xl text-white font-bold mb-6">Getting Started</h1>
      <div class="min-w-fit bg-white rounded-lg shadow-lg pt-8 md:p-8">
        <h2 class="text-2xl font-bold mb-4">Interactive Tutorial</h2>
        <p class="mb-4">Learn the basics of Jane language through an interactive tutorial.</p>
        <div class="border border-gray-300 rounded-md p-4 mb-6">
          <Tutorial />
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

<template>
  <div class="flex flex-col min-h-screen bg-black">
    <Header />
      <div class="flex flex-col flex-grow items-center justify-center text-white">
          <h2 class="text-6xl font-bold mb-4">
            Error {{ error.statusCode }}
          </h2>
          <p class="text-2xl text-gray-300">{{ getErrorMessage() }}</p>
          <img src="~/assets/img/ida_error.png" alt="IDA Error" class="mb-6" />
      </div>
    <Footer />
  </div>
</template>

<script lang="ts">
export default {
  name: "Error",
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getErrorMessage() {
      switch (this.error.statusCode) {
        case 404:
          return "Page not found.";
        case 500:
          return "Internal server error.";
        default:
          return "An error occurred.";
      }
    },
  },
  setup() {
    
  }
}
</script>

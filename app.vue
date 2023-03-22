<template>
  <div :class="['container', { 'dark': isDarkMode }]">
    <h1 :class="['title', { 'dark': isDarkMode }]">Sorry!</h1>
    <p :class="['subtitle', { 'dark': isDarkMode }]">There's no content available for janelang.ml at the moment. Please check back later.</p>
    <a href="https://github.com/nora2605/janelangml" target="_blank" rel="noopener noreferrer" :class="['button', { 'dark': isDarkMode }]">What is this?</a>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isDarkMode() {
      return true;
    }
  }
}
</script>

<style>
html, body {
  margin: 0px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
}

.container.dark {
  background-color: #212121;
}

.title {
  font-size: 4rem;
  color: #212121;
  margin-bottom: 2rem;
  text-align: center;
}

.title.dark {
  color: #00bcd4;
}

.subtitle {
  font-size: 1.5rem;
  color: #757575;
  margin-bottom: 2rem;
  text-align: center;
}

.subtitle.dark {
  color: #b2fef7;
}

.button {
  padding: 0.75rem 1.5rem;
  background-color: #00bcd4;
  color: #fff;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #b2fef7;
  color: #212121;
}

.button.dark {
  background-color: #b2fef7;
  color: #212121;
}

.button.dark:hover {
  background-color: #00bcd4;
  color: #fff;
}
</style>
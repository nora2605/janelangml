<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script>
export default {
  name: 'Janelang.ml',
  setup() {
    useHead({
      title: 'Janelang.ml',
      meta: [
        { name: 'description', content: 'Jane language homepage' }
      ]
    })
  }
}
</script>

<style>
html,
body {
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
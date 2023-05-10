<template>
    <div class="font-instrument-sans flex flex-col bg-gray-900 min-h-screen">
        <Header />
        <main class="flex flex-grow justify-center">
            <slot />
        </main>
        <Footer />
    </div>
</template>
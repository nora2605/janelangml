<template>
  <div class="lg:min-w-lg">
    <div class="mb-4 max-w-4xl">
      <h3 class="text-lg font-bold mb-2">{{ currentStep.title }}</h3>
      <p class="break-words">{{ currentStep.description }}</p>
    </div>
    <CodeBlock
      ref="cb"
      :code="currentStep.code"
      :filename="currentStep.filename"
    />
    <div v-if="wasWrong" class="rounded-md border border-red-800 p-1 bg-red-300">
        <p class="text-red-800">Hmm that was not quite right, try again</p>
    </div>
    <div v-if="currentStep.showInput" class="my-2">
      <label class="block mt-4 flex flex-col">
        <span class="text-lg font-bold">{{ currentStep.inputLabel }}</span>
        <input v-on:keyup.enter="submitInput" ref="inputAnswer" value="" class="disabled:bg-green-300 mt-1 p-2 border rounded-md" type="text" :placeholder="currentStep.inputValue">
      </label>
      <div class="flex justify-between"><button class="mt-2 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md"
              @click="submitInput">Submit</button><p class="font-maple-mono italic text-lg" v-if="wasRight">Good Job!</p></div>
    </div>
    
    <div class="p-2 bg-gray-900 rounded-md my-4">
        <pre class="text-white font-maple-mono italic" ref="output">Output: </pre>
    </div>
    <div class="flex justify-between">
      <button
        class="disabled:bg-gray-600 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md"
        @click="previousStep"
        :disabled="currentStepIndex === 0"
      >
        Previous
      </button>
      <button
        class="disabled:bg-gray-600 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md"
        @click="run"
        :disabled="!currentStep.output"
      >
        Run
      </button>
      <button
        class="disabled:bg-gray-600 bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md"
        @click="nextStep"
        :disabled="currentStepIndex >= steps.length - 1"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import tutorial from "~/assets/snippets/Tutorial.jn?raw";

export default {
  name: "InteractiveTutorial",
  data() {
    let steps = [];
    let programs = tutorial.split("///:").map((p) => p.trim());
    programs.forEach((p) => {
      if (!p || p.length === 0) return;
      let meta = p.split("\n");
      let step = JSON.parse(meta[0]);
      step['code'] = meta.slice(1).join('\n');
      steps.push(step);
    });
    
    const h = this.$route.query;
    let cs = h.step ?? 0;
    
    return {
      steps,
      currentStepIndex: cs,
      wasWrong: false,
      wasRight: false
    };
  },
  computed: {
    currentStep() {
      return this.steps[this.currentStepIndex];
    },
    urlStep() {
      return 0;
    }
  },
  methods: {
    previousStep() {
      if (this.currentStepIndex > 0) {
        this.currentStepIndex--;
      }
      this.update();
    },
    nextStep() {
      if (this.currentStepIndex < this.steps.length - 1) {
        this.currentStepIndex++;
      }
      this.update();
    },
    update() {
      // navigateTo(`?step=${this.currentStepIndex}`);
      useRouter().replace(`?step=${this.currentStepIndex}`);
      this.$nextTick(() => {
        hljs.highlightAll();
      });
      this.$refs.output.innerHTML = `Output: `;
    },
    run() {
        // Nice fake loading thing to keep people hooked or sth
        this.$refs.output.innerHTML = `Output: /`;
        let phase = 0;
        let i = setInterval(() => {
            this.$refs.output.innerHTML = `Output: ${"-\\|/".charAt(phase % 4)}`;
            phase++;
        }, 80);
        setTimeout(() => {
            clearInterval(i);
            this.$refs.output.textContent = `Output: ${this.currentStep.output}`;
        }, Math.random() * 1000 + 200);
    },
    submitInput() {
        if (this.currentStep.answer.some(x =>this.$refs.inputAnswer.value.toLowerCase().includes(x))) {
            this.$refs.inputAnswer.disabled = true;
            this.wasWrong = false;
            this.wasRight = true;
        } else {
            this.wasWrong = true;
        }
    }
  }
};
</script>
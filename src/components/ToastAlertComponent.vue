<template>
  <div v-if="statusAlert" class="fixed top-[90px] right-10 p-3 max-w-[400px] z-10 bg-gray-100 rounded-lg opacity-75">
    <div class="grid grid-cols-12">
      <div class="col-span-2 m-auto">
        <div v-if="category == 'info'">
          <svg class="w-10 h-10 bg-green-300 rounded-full" fill="green" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule=""
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <div v-if="category == 'warning'">
          <svg class="w-10 h-10 bg-green-300 rounded-full" fill="green" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule=""
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <div v-if="category == 'error'">
          <svg class="w-10 h-10 bg-green-300 rounded-full" fill="green" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule=""
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        <div v-if="category == 'success'">
          <svg class="w-10 h-10 bg-green-300 rounded-full" fill="green" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule=""
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
      <div class="col-span-9 m-2">
        <div class="text-md font-semibold pb-2">{{ title }}</div>
        <div class="text-sm">{{ messages }}</div>
      </div>
      <div class="col-span-1">
        <button @click="removeToast" class="hover:border p-1 px-3">x</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingToastComponent',
  props: {
    messages: String,
    title: String,
    category: String,
    status: Boolean
  },
  data()
  {
    return {
      statusAlert: this.status
    }
  },
  mounted()
  {
    console.log(this.statusAlert)
    setTimeout(() =>
    {
      this.statusAlert = false;
      this.$emit("result")
    }, 2000)
  },
  methods: {
    removeToast()
    {
      this.$emit("result")
      this.statusAlert = false;
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
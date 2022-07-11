<template>
  <main>
    <BreadCrump class="p-4" :page="this.$route.name" :params="this.$route.query.q" />
    <div class="p-4 mb-10">
      <div class="grid grid-cols-12 bg-gray-100 p-4 gap-4 rounded-md">
        <div class="col-span-12 text-center my-4">
          <div class="text-2xl font-bold">E Catalogue</div>
          <div class="text-sm text-orange-400">Lorem Ipsum</div>
        </div>
        <div class="col-span-4 hover:p-4 hover:shadow-lg hover:rounded-lg">
          <img src="https://dummyimage.com/600x400/b8b8b8/34385e.png&text=Img+600x400" alt="" class="hover:rounded-lg">
          <div class="flex justify-between">
            <div class="text-md font-semibold">E Brochure</div>
            <div class="text-md font-semibold text-orange-500">01-01-2022</div>
          </div>
          <div class="text-lg font-bold text-center">Brochure Title</div>
          <div class="">created by <span class="text-orange-400">Admin</span>
          </div>
        </div>
        <div class="col-span-4 hover:p-4 hover:shadow-lg hover:rounded-lg">
          <img src="https://dummyimage.com/600x400/b8b8b8/34385e.png&text=Img+600x400" alt="" class="hover:rounded-lg">
          <div class="flex justify-between">
            <div class="text-md font-semibold">E Brochure</div>
            <div class="text-md font-semibold text-orange-500">01-01-2022</div>
          </div>
          <div class="text-lg font-bold text-center">Brochure Title</div>
          <div class="">created by <span class="text-orange-400">Admin</span>
          </div>
        </div>
        <div class="col-span-4 hover:p-4 hover:shadow-lg hover:rounded-lg">
          <img src="https://dummyimage.com/600x400/b8b8b8/34385e.png&text=Img+600x400" alt="" class="hover:rounded-lg">
          <div class="flex justify-between">
            <div class="text-md font-semibold">E Brochure</div>
            <div class="text-md font-semibold text-orange-500">01-01-2022</div>
          </div>
          <div class="text-lg font-bold text-center">Brochure Title</div>
          <div class="">created by <span class="text-orange-400">Admin</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BreadCrump from '@/components/BreadcrumpComponent.vue';

export default {
  name: "LandingBrochureSection",
  components: {
    BreadCrump
  },
  data()
  {
    return {};
  },

  mounted() { },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>

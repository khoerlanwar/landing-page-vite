<template>
  <main>
    <BreadCrump class="p-4" :page="this.$route.name" :params="this.$route.query.q" />
    <!-- Detail Treatment -->
    <div v-if="this.$route.query.q" class="mb-10 p-4">
      <div class="text-2xl font-bold">Microdermabration ( For Superficial Scar)</div>
      <div class="text-lg font-semibold text-orange-400">Spa Treatment</div>
      <div class="grid grid-cols-12 gap-2">
        <div class="lg:col-span-9 col-span-12">
          <img src="https://dummyimage.com/1028x682/b8b8b8/34385e.png&text=Treatment+1028x682" alt=""
            class="w-full rounded">
        </div>
        <div class="lg:col-span-3 col-span-12">
          <div class="grid gap-2 lg:grid-12 grid-cols-12">
            <div class="lg:col-span-12 col-span-6">
              <img src="https://dummyimage.com/350x350 /b8b8b8/34385e.png&text=Treatment+350x350" alt=""
                class="w-full rounded">
            </div>
            <div class="lg:col-span-12 col-span-6">
              <img src="https://dummyimage.com/350x350/b8b8b8/34385e.png&text=Treatment+350x350" alt=""
                class="w-full rounded">
            </div>
          </div>
        </div>
      </div>
      <router-link to="#">
        <div class="bg-orange-500 w-3/4 m-auto rounded-full hover:opacity-75 hover:scale-105">
          <div class="text-center lg:p-4 p-2 mt-4 text-white lg:text-lg font-semibold">Konsultasi Sekarang</div>
        </div>
      </router-link>
      <div class="my-4">
        <div class=" bg-slate-100 p-4 rounded-lg">
          <div class="lg:text-xl text-lg font-bold">Microdermabration ( For Superficial Scar)</div>
          <div class="mt-2 lg:text-md text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula
            eget dolor.
            Aenean massa.
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,
            fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
            justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper
            nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
            laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero,
            sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
            ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec
            sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</div>
        </div>
      </div>
    </div>
    <!-- End Detail Treatment -->
    <div v-else class="mb-10">
      <div class="grid grid-cols-12 bg-slate-50 p-4 gap-4 rounded-md">
        <div class="col-span-12 text-center my-4">
          <div class="text-3xl font-bold">Semua Perawatan</div>
          <div class="text-md text-orange-500 w-3/4 m-auto">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean
            commodo
            ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          </div>
          <input class="w-2/4 p-2 outline-orange-400 rounded-lg border mt-4" placeholder="Cari Treatment..." />
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/treatment?q=nama treatment string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2 text-center">
              <div class="text-xl font-bold">Nama Treatment String</div>
              <div class="text-md font-semibold text-orange-500">Spa Treatment</div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/treatment?q=nama treatment string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2 text-center">
              <div class="text-xl font-bold">Nama Treatment String</div>
              <div class="text-md font-semibold text-orange-500">Spa Treatment</div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/treatment?q=nama treatment string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2 text-center">
              <div class="text-xl font-bold">Nama Treatment String</div>
              <div class="text-md font-semibold text-orange-500">Spa Treatment</div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/treatment?q=nama treatment string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2 text-center">
              <div class="text-xl font-bold">Nama Treatment String</div>
              <div class="text-md font-semibold text-orange-500">Spa Treatment</div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/treatment?q=nama treatment string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2 text-center">
              <div class="text-xl font-bold">Nama Treatment String</div>
              <div class="text-md font-semibold text-orange-500">Spa Treatment</div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/treatment?q=nama treatment string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2 text-center">
              <div class="text-xl font-bold">Nama Treatment String</div>
              <div class="text-md font-semibold text-orange-500">Spa Treatment</div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/treatment?q=nama treatment string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2 text-center">
              <div class="text-xl font-bold">Nama Treatment String</div>
              <div class="text-md font-semibold text-orange-500">Spa Treatment</div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/treatment?q=nama treatment string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2 text-center">
              <div class="text-xl font-bold">Nama Treatment String</div>
              <div class="text-md font-semibold text-orange-500">Spa Treatment</div>
            </div>
          </router-link>
        </div>
        <!-- pagination -->
        <div class="col-span-12 m-auto my-2">
          <div class="flex flex-cols">
            <router-link to="#">
              <div
                class="rounded-full min-w-[42px] min-h-[42px] bg-gray-200 border border-gray-400 mx-1 hover:bg-orange-400 hover:text-white hover:border-white hover:opracity-75">
                <div class="m-2 text-center">1</div>
              </div>
            </router-link>
            <router-link to="#">
              <div
                class="rounded-full min-w-[42px] min-h-[42px] bg-gray-200 border border-gray-400 mx-1 hover:bg-orange-400 hover:text-white hover:border-white hover:opracity-75">
                <div class="m-2 text-center">2</div>
              </div>
            </router-link>
            <div
              class="rounded-full min-w-[42px] min-h-[42px] bg-gray-200 border border-gray-400 mx-1 hover:bg-orange-400 hover:text-white hover:border-white hover:opracity-75">
              <div class="m-2 text-center">...</div>
            </div>
            <router-link to="#">
              <div
                class="rounded-full min-w-[42px] min-h-[42px] bg-gray-200 border border-gray-400 mx-1 hover:bg-orange-400 hover:text-white hover:border-white hover:opracity-75">
                <div class="m-2 text-center">99</div>
              </div>
            </router-link>
          </div>
        </div>
        <!-- end pagination -->
      </div>
    </div>
  </main>
</template>

<script>
import BreadCrump from '@/components/BreadcrumpComponent.vue';

export default {
  name: "LandingTreatmentSection",
  components: {
    BreadCrump
  },
  data()
  {
    return {};
  },

  mounted()
  {
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>

<template>
  <main>
    <BreadCrump class="p-4" :page="this.$route.name" :params="this.$route.query.q" />
    <!-- Article Detail -->
    <div v-if="this.$route.query.q" class="grid gap-4 lg:grid-cols-12 p-4">
      <!-- Article -->
      <div class="lg:col-span-9 mobile:col-span-12">
        <div class="flex flex-col">
          <div class="flex items-center">
            <div class="rounded-full bg-slate-100 flex flex-col py-2 px-6 mr-4">
              <span class="font-bold text-2xl">18</span>
              <span class="text-center font-semibold text-orange-400">Jan</span>
            </div>
            <div class="lg:text-2xl font-bold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor.
              <div class="text-sm">
                by <i class="text-orange-400">admin</i>
                <span
                  class="text-xs lg:text-tiny bg-orange-400 text-white px-4 py-1 rounded font-semibold ml-2">Kategori</span>
              </div>
            </div>
          </div>
          <div class="py-4">
            <img src="https://dummyimage.com/1280x600/b8b8b8/34385e.png&text=Article+1280x600" alt="" class="rounded" />
          </div>
          <div class="pt-2">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
            sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
            vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean
            imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper
            ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus,
            tellus eget condimentum rhoncus, sem quam semper libero, sit amet
            adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus
            pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt
            tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam
            quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis
            leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
            magna. Sed consequat, leo eget bibendum sodales, augue velit
            cursus nunc, quis gravida magna mi a libero. Fusce vulputate
            eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis
            sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras
            ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia Curae;
            In ac dui quis mi consectetuer lacinia. Nam pretium turpis et
            arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet
            iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu,
            accumsan a, consectetuer eget, posuere ut, mauris. Praesent
            adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy
            metus. Vestib
          </div>
          <div class="text-right pt-4">
            Share:
            <a href="/article/1234" class="mx-1 text-blue-500">Instagram</a>
            <a href="#" class="mx-1 text-blue-500">Facebook</a>
            <a href="#" class="mx-1 text-blue-500">Twitter</a>
            <a href="#" class="mx-1 text-blue-500">Whatsapp</a>
          </div>
        </div>
      </div>
      <!-- A Side -->
      <div class="lg:col-span-3 mobile:col-span-12 flex flex-col space-y-4">
        <div>
          <div class="text-xl font-bold">Promo Side</div>
          <div class="relative flex space-x-4 overflow-auto">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Promo+300x300" alt=""
              class="my-4 lg:min-w-[300px]" />
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Promo+300x300" alt=""
              class="my-4 lg:min-w-[300px]" />
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Promo+300x300" alt=""
              class="my-4 lg:min-w-[300px]" />
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Promo+300x300" alt=""
              class="my-4 lg:min-w-[300px]" />
          </div>
        </div>
        <div>
          <div class="text-xl font-bold">#Tags</div>
          <div class="flex flex-wrap text-center">
            <a href="#" class="m-2">
              <span class="bg-slate-200 px-4 py-1 rounded-md">Aging</span>
            </a>
            <a href="#" class="m-2">
              <span class="bg-slate-200 px-4 py-1 rounded-md">Acne</span>
            </a>
            <a href="#" class="m-2">
              <span class="bg-slate-200 px-4 py-1 rounded-md">Hair Solution</span>
            </a>
            <a href="#" class="m-2">
              <span class="bg-slate-200 px-4 py-1 rounded-md">NMW Clinic</span>
            </a>
          </div>
        </div>
        <div>
          <div class="text-xl font-bold">Latest Article</div>
          <div class="flex flex-col">
            <div>
              <img src="https://dummyimage.com/300x200/b8b8b8/34385e.png&text=Side+Article+300x200" alt=""
                class="rounded" />
              <div class="text-md font-semibold py-4">
                <div class="flex justify-between">
                  <div class="bg-orange-400 px-4 py-1/2 rounded-md text-white">
                    Kategori
                  </div>
                  <div class="font-bold text-sm">21 Juni 2022</div>
                </div>
                <div class="font-bold pt-2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
              </div>
            </div>
            <div>
              <img src="https://dummyimage.com/300x200/b8b8b8/34385e.png&text=Side+Article+300x200" alt=""
                class="rounded" />
              <div class="text-md font-semibold py-4">
                <div class="flex justify-between">
                  <div class="bg-orange-400 px-4 py-1/2 rounded-md text-white">
                    Kategori
                  </div>
                  <div class="font-bold text-sm">21 Juni 2022</div>
                </div>
                <div class="font-bold pt-2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
              </div>
            </div>
            <div>
              <img src="https://dummyimage.com/300x200/b8b8b8/34385e.png&text=Side+Article+300x200" alt=""
                class="rounded" />
              <div class="text-md font-semibold py-4">
                <div class="flex justify-between">
                  <div class="bg-orange-400 px-4 py-1/2 rounded-md text-white">
                    Kategori
                  </div>
                  <div class="font-bold text-sm">21 Juni 2022</div>
                </div>
                <div class="font-bold pt-2">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Article Detail -->
    <div v-else class="p-4 mb-4">
      <div class="grid grid-cols-12 bg-gray-100 p-4 gap-4">
        <div class="col-span-12 text-center my-4">
          <div class="text-center text-2xl pb-4">Semua Artikel</div>
          <input class="w-2/4 p-2 outline-orange-400 rounded-lg border" placeholder="Cari Article..." />
        </div>
        <div class="col-span-4 hover:scale-105 hover:shadow-md hover:p-4 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/408x250/b8b8b8/34385e.png&text=Artikel+408x250" alt=""
              class="w-full rounded-lg">
            <div class="flex justify-between items-center py-3">
              <div class="bg-orange-500 text-white p-1 px-3 rounded-md">
                Kategori
              </div>
              <div>01-01-2022</div>
            </div>
            <div class="flex felx-wrap flex-col">
              <div class="text-tiny font-bold mb-3">
                Article Title String
              </div>
              <div class="text-xs text-slate-600">
                Article Description
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-span-4 hover:scale-105 hover:shadow-md hover:p-4 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/408x250/b8b8b8/34385e.png&text=Artikel+408x250" alt=""
              class="w-full rounded-lg">
            <div class="flex justify-between items-center py-3">
              <div class="bg-orange-500 text-white p-1 px-3 rounded-md">
                Kategori
              </div>
              <div>01-01-2022</div>
            </div>
            <div class="flex felx-wrap flex-col">
              <div class="text-tiny font-bold mb-3">
                Article Title String
              </div>
              <div class="text-xs text-slate-600">
                Article Description
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-span-4 hover:scale-105 hover:shadow-md hover:p-4 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/408x250/b8b8b8/34385e.png&text=Artikel+408x250" alt=""
              class="w-full rounded-lg hover">
            <div class="flex justify-between items-center py-3">
              <div class="bg-orange-500 text-white p-1 px-3 rounded-md">
                Kategori
              </div>
              <div>01-01-2022</div>
            </div>
            <div class="flex felx-wrap flex-col">
              <div class="text-tiny font-bold mb-3">
                Article Title String
              </div>
              <div class="text-xs text-slate-600">
                Article Description
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-span-4 hover:scale-105 hover:shadow-md hover:p-4 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/408x250/b8b8b8/34385e.png&text=Artikel+408x250" alt=""
              class="w-full rounded-lg">
            <div class="flex justify-between items-center py-3">
              <div class="bg-orange-500 text-white p-1 px-3 rounded-md">
                Kategori
              </div>
              <div>01-01-2022</div>
            </div>
            <div class="flex felx-wrap flex-col">
              <div class="text-tiny font-bold mb-3">
                Article Title String
              </div>
              <div class="text-xs text-slate-600">
                Article Description
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-span-4 hover:scale-105 hover:shadow-md hover:p-4 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/408x250/b8b8b8/34385e.png&text=Artikel+408x250" alt=""
              class="w-full rounded-lg">
            <div class="flex justify-between items-center py-3">
              <div class="bg-orange-500 text-white p-1 px-3 rounded-md">
                Kategori
              </div>
              <div>01-01-2022</div>
            </div>
            <div class="flex felx-wrap flex-col">
              <div class="text-tiny font-bold mb-3">
                Article Title String
              </div>
              <div class="text-xs text-slate-600">
                Article Description
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-span-4 hover:scale-105 hover:shadow-md hover:p-4 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/408x250/b8b8b8/34385e.png&text=Artikel+408x250" alt=""
              class="w-full rounded-lg">
            <div class="flex justify-between items-center py-3">
              <div class="bg-orange-500 text-white p-1 px-3 rounded-md">
                Kategori
              </div>
              <div>01-01-2022</div>
            </div>
            <div class="flex felx-wrap flex-col">
              <div class="text-tiny font-bold mb-3">
                Article Title String
              </div>
              <div class="text-xs text-slate-600">
                Article Description
              </div>
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
  name: "LandingArticleSection",
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

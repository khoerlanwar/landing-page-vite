<template>
  <main>
    <BreadCrump class="p-4" :page="this.$route.name" :params="this.$route.query.q" />
    <!-- Detail Product -->
    <div v-if="this.$route.query.q" class="p-4">
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-5">
          <img src="https://dummyimage.com/625x750/b8b8b8/34385e.png&text=Img+625x750" alt="" class="rounded-lg p-1">
        </div>
        <div class="col-span-12 md:col-span-2">
          <div class="grid grid-cols-3">
            <div class="md:col-span-3">
              <img src="https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Img+200x200" alt=""
                class="rounded-lg p-1" />
            </div>
            <div class="md:col-span-3">
              <img src="https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Img+200x200" alt=""
                class="rounded-lg p-1" />
            </div>
            <div class="md:col-span-3">
              <img src="https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Img+200x200" alt=""
                class="rounded-lg p-1" />
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-5 p-3 px-4">
          <div class="my-6">
            <div class="border-b pb-2">
              <div class="md:text-2xl text-lg text-orange-500 font-bold mr-3">Nama Produk String</div>
              <span class="bg-red-500 text-white md:text-lg text-xs p-1 px-2 rounded-full font-bold m-auto">Best
                Seller</span>
            </div>
            <div class="flex space-x-2 my-2">
              <span class="bg-blue-400 text-white md:text-sm text-xs p-1 px-2 rounded-full font-bold">Kategori</span>
              <span class="bg-blue-400 text-white md:text-sm text-xs p-1 px-2 rounded-full font-bold">Kategori</span>
              <span class="bg-blue-400 text-white md:text-sm text-xs p-1 px-2 rounded-full font-bold">Kategori</span>
            </div>
          </div>
          <div class="mb-6 border-b">
            <div class="text-lg text-orange-500 font-bold">Harga Satuan :</div>
            <label class="md:text-2xl text-lg font-bold text-red-500">Rp. 699.999</label>
            <div class="my-2">
              <s class="md:text-xl text-tiny font-bold text-slate-500">Rp 999.999</s>
              <span class="md:text-tiny text-xs bg-red-500 text-white mx-3 p-1 px-2 rounded font-bold">Disc 20%</span>
            </div>
          </div>
          <div class="my-6 w-1/3 m-auto">
            <div class="flex flex-row md:h-10 h-8 w-full rounded-lg relative bg-transparent mt-1">
              <button @click="quantity < 1 ? 0 : quantity--"
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                <span class="m-auto md:text-lg text-sm font-bold">−</span>
              </button>
              <input type="number"
                class="outline-none focus:outline-none text-center w-full bg-slate-100 font-semibold hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none md:text-lg text-sm"
                name="custom-input-number" :value="quantity" min="0" max="10" />
              <button @click="quantity >= 10 ? 0 : quantity++"
                class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                <span class="m-auto md:text-lg text-sm font-bold">+</span>
              </button>
            </div>
          </div>
          <div class="flex flex-col space-y-3">
            <button
              class="bg-blue-500 text-white md:py-3 py-2 font-bold md:text-tiny text-sm rounded-xl hover:opacity-75 hover:scale-105">Konsultasi
              Sekarang</button>
            <button
              class="bg-green-500 text-white md:py-3 py-2 font-bold md:text-tiny text-sm rounded-xl hover:opacity-75 hover:scale-105">+
              Keranjang</button>
            <button
              class="bg-orange-400 text-white md:py-3 py-2 font-bold md:text-tiny text-sm rounded-xl hover:opacity-75 hover:scale-105">Lihat
              Shopee</button>
          </div>
        </div>
      </div>
      <div class="text-xl font-bold mt-6 mb-3">Deskripsi Produk</div>
      <div class="flex p-6 bg-slate-50">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
        sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
        nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
        aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
        felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
        eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
        dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
        Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
        rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque
        sed ipsum. N
      </div>
      <div class="text-3xl font-bold mt-6 mb-3 text-center">Product Terkait</div>
      <div class="flex space-x-4 py-4 overflow-auto">
        <router-link to="product?q=&id=2">
          <img src="https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Img+200x200" alt=""
            class="rounded-lg p-1 min-w-[200px]" />
        </router-link>
        <router-link to="product?q=&id=3">
          <img src="https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Img+200x200" alt=""
            class="rounded-lg p-1 min-w-[200px]" />
        </router-link>
        <router-link to="product?q=&id=4">
          <img src="https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Img+200x200" alt=""
            class="rounded-lg p-1 min-w-[200px]" />
        </router-link>
        <router-link to="product?q=&id=5">
          <img src="https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Img+200x200" alt=""
            class="rounded-lg p-1 min-w-[200px]" />
        </router-link>
        <router-link to="product?q=&id=6">
          <img src="https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Img+200x200" alt=""
            class="rounded-lg p-1 min-w-[200px]" />
        </router-link>
        <router-link to="product?q=&id=6">
          <img src="https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Img+200x200" alt=""
            class="rounded-lg p-1 min-w-[200px]" />
        </router-link>
        <router-link to="product?q=&id=6">
          <img src="https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Img+200x200" alt=""
            class="rounded-lg p-1 min-w-[200px]" />
        </router-link>
      </div>
    </div>
    <!-- End Detail Product -->
    <div v-else class="mb-10">
      <div class="grid grid-cols-12 bg-gray-100 p-4 gap-4 rounded-md">
        <div class="col-span-12 text-center my-4">
          <div class="text-3xl font-bold">Semua Produk</div>
          <input class="w-2/4 p-2 outline-orange-400 rounded-lg border" placeholder="Cari Produk...">
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2">
              <div class="text-xl font-bold">Nama Product String</div>
              <div class="flex w-full flex-wrap">
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Acne</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Anti Aging</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Jerawat</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Kulit Berminyak</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2">
              <div class="text-xl font-bold">Nama Product String</div>
              <div class="flex w-full flex-wrap">
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Acne</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Anti Aging</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Jerawat</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Kulit Berminyak</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2">
              <div class="text-xl font-bold">Nama Product String</div>
              <div class="flex w-full flex-wrap">
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Acne</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Anti Aging</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Jerawat</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Kulit Berminyak</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2">
              <div class="text-xl font-bold">Nama Product String</div>
              <div class="flex w-full flex-wrap">
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Acne</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Anti Aging</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Jerawat</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Kulit Berminyak</div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <div class="col-span-3 hover:scale-105 hover:shadow-md hover:p-3 rounded-lg">
          <router-link :to="'/product?q=nama product string'">
            <img src="https://dummyimage.com/300x300/b8b8b8/34385e.png&text=Img+300x300" alt=""
              class="w-full rounded-lg">
            <div class="py-2">
              <div class="text-xl font-bold">Nama Product String</div>
              <div class="flex w-full flex-wrap">
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Acne</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Anti Aging</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Jerawat</div>
                </div>
                <div class="col-span-3 bg-orange-500 rounded-lg m-1">
                  <div class="text-sm text-white px-2">Kulit Berminyak</div>
                </div>
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
  name: "LandingProductSection",
  components: {
    BreadCrump,
  },
  data()
  {
    return {
      quantity: 1,
    };
  },
  mounted() { },
  methods: {},
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-number-input input:focus {
  outline: none !important;
}

.custom-number-input button:focus {
  outline: none !important;
}
</style>

<template>
  <main>
    <div class="p-4">
      <BreadCrump class="mb-4" />
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

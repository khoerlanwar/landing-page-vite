<template>
  <div class="fixed top-0 left-0 w-full h-[78px] z-10 bg-slate-50" :class="scrolled ? 'scroll' : ''">
    <div class="flex justify-between items-center p-4">
      <a href="/">
        <img src="https://dummyimage.com/120x48/ffffff/34385e.png&text=Logo+120x48" alt="Icon Logo"
          class="max-w-[120px]" />
      </a>
      <div></div>
      <nav>
        <div class="flex space-x-2">
          <button class="border p-2 text-black text-sm px-4 rounded-lg hover:bg-orange-500 hover:text-white">
            Masuk
          </button>
          <div class="relative inline-block text-left dropdown">
            <button class="border p-2 text-black text-sm px-4 rounded-lg hover:bg-orange-500 hover:text-white"
              type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
              <div v-if="cartStore.totalCarts">
                <span class="fixed h-4 w-4 top-2 right-3">
                  <span class="fixed animate-ping h-4 w-4 rounded-full bg-orange-400 opacity-75 top-3 right-3"></span>
                  <span
                    class="relative inline-flex rounded-full h-4 w-4 bg-orange-500 justify-center text-white text-bagdes items-center">
                    {{ cartStore.totalCarts }}
                  </span>
                </span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="1.3">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <div
              class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
              <div
                class="absolute right-0 w-[300px] mt-2 px-4 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                aria-labelledby="headlessui-menu-button-1" id="cart" role="menu">
                <div v-for="items in cartStore.myCarts" :key="items.cart_id" :id="items.cart_id"
                  class="flex jusitfy-start items-center">
                  <div class="my-2">
                    <img :src="items.cart_img" alt="" class="rounded-full m-auto min-w-[80px]" />
                  </div>
                  <div class="my-2 p-2 ml-4">
                    <div class="text-sm font-semibold">{{ items.cart_title }}</div>
                    <div class="custom-number-input h-6 w-18 my-1 w-1/2">
                      <div class="flex flex-row h-6 w-full rounded-lg relative bg-transparent mt-1">
                        <button @click="decreseQuantity(items.cart_id)"
                          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                          <span class="m-auto text-xs font-thin">−</span>
                        </button>
                        <input type="number"
                          class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none text-xs"
                          name="custom-input-number" :value="items.cart_quantity" />
                        <button @click="increseQuantity(items.cart_id)"
                          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                          <span class="m-auto text-xs font-thin">+</span>
                        </button>
                      </div>
                    </div>
                    <div class="mt-2">
                      <div v-if="items.cart_price_discount" class="text-xs text-slate-500">
                        <s>Rp {{ (items.cart_price * items.cart_quantity).toLocaleString("en-US") }} </s>
                      </div>
                      <div class="text-tiny" :class="items.cart_price_discount ? 'text-red-500' : 'text-slate-500'">
                        Rp
                        {{
                            items.cart_price_discount ?
                              (items.cart_price_discount * items.cart_quantity).toLocaleString("en-US") :
                              (items.cart_price * items.cart_quantity).toLocaleString("en-US")
                        }}
                      </div>
                    </div>
                    <div class="my-1" :class="items.cart_quantity ? 'hidden' : 'none'">
                      <button @click="deleteButton(items.cart_id)"
                        class="bg-red-400 w-full rounded h-6 hover:opacity-75 text-center text-white text-xs font-semibold">
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
                <div v-if="cartStore.totalCarts">
                  <div class="flex justify-between">
                    <div class="text-tiny py-4">Total Price :</div>
                    <div class="text-tiny py-4">
                      Rp {{ cartStore.totalPrice.toLocaleString("en-US") }}
                    </div>
                  </div>
                  <div class="flex w-full block py-4">
                    <button class="text-tiny  w-full text-white rounded py-2"
                      :disabled="cartStore.totalPrice ? false : 'isDisabled'"
                      :class="cartStore.totalPrice ? 'bg-orange-500' : 'bg-slate-400'">
                      Bayar Sekarang
                    </button>
                  </div>
                </div>
                <div v-else class="text-tiny text-center py-3">
                  Keranjang Kosong
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/carts";

export default {
  name: "LandingHeaderComponent",
  components: {
    // IconBell,
  },
  setup()
  {
    const cartStore = useCartStore()

    return { cartStore }
  },
  data()
  {
    return {
      scrolled: false,
    };
  },
  mounted()
  { },
  methods: {
    handleScroll()
    {
      this.scrolled = window.scrollY > 0;
    },
    decreseQuantity(params)
    {
      this.cartStore.decreseQuantity(params)
    },
    increseQuantity(params)
    {
      this.cartStore.increseQuantity(params)
    },
    deleteButton(params)
    {
      this.cartStore.removeCarts(params)
      document.getElementById(params).remove();
    }
  },
  created()
  {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted()
  {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.scroll {
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.2);
  border-bottom: default;
}

.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}

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

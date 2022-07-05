<template>
  <div
    class="fixed w-full z-50 transition-all bg-white"
    :class="scrolled ? 'scroll' : ''"
  >
    <div class="container flex justify-between w-full p-4 m-auto">
      <a href="/">
        <img
          src="https://dummyimage.com/120x48/ffffff/34385e.png&text=Logo+120x48"
          alt="Icon Logo"
          class="w-[120px]"
        />
      </a>
      <nav>
        <div class="flex space-x-2">
          <button
            class="border p-2 text-black text-sm px-4 rounded-lg hover:bg-orange-500 hover:text-white"
          >
            Masuk
          </button>
          <div class="relative inline-block text-left dropdown">
            <button
              class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
              type="button"
              aria-haspopup="true"
              aria-expanded="true"
              aria-controls="headlessui-menu-items-117"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="flex h-4 w-4 mx-1">
                <span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"
                ></span
                ><span
                  class="relative inline-flex rounded-full h-4 w-4 bg-orange-500 justify-center text-white text-bagdes items-center"
                  >3</span
                >
              </span>
            </button>
            <div
              class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"
            >
              <div
                class="absolute right-0 w-[300px] mt-2 px-4 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                aria-labelledby="headlessui-menu-button-1"
                id="cart"
                role="menu"
              >
                <div
                  v-for="items in cart"
                  :key="items.id"
                  :id="items.id"
                  class="flex jusitfy-start items-center"
                >
                  <div class="my-2">
                    <img
                      src="https://dummyimage.com/80x80/b8b8b8/34385e.png&text=Cart+80x80"
                      alt=""
                      class="rounded-full m-auto min-w-[80px]"
                    />
                  </div>
                  <div class="my-2 p-2 ml-4">
                    <div class="text-xs">{{ items.title }}</div>
                    <div class="custom-number-input h-6 w-20 my-1">
                      <div
                        class="flex flex-row h-6 w-full rounded-lg relative bg-transparent mt-1"
                      >
                        <button
                          @click="decreseQuantity(items.id)"
                          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                        >
                          <span class="m-auto text-xs font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black md:text-basecursor-default flex items-center text-gray-700 outline-none text-xs"
                          name="custom-input-number"
                          :value="items.quantity"
                        />
                        <button
                          @click="increseQuantity(items.id)"
                          class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                        >
                          <span class="m-auto text-xs font-thin">+</span>
                        </button>
                      </div>
                    </div>
                    <div class="text-xs">
                      Rp
                      {{
                        (items.Price * items.quantity).toLocaleString("en-US")
                      }}
                    </div>
                  </div>
                </div>
                <div v-if="totalPrice">
                  <div class="flex justify-between">
                    <div class="text-tiny py-4">Total Price :</div>
                    <div class="text-tiny py-4">
                      {{ totalPrice.toLocaleString("en-US") }}
                    </div>
                  </div>
                  <div class="flex w-full block py-4">
                    <button
                      class="text-tiny bg-green-500 w-full text-white rounded py-2"
                    >
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
export default {
  name: "LandingHeaderComponent",
  components: {
    // IconBell,
  },
  data() {
    return {
      scrolled: false,
      totalPrice: 0,
      cart: [
        {
          id: 1,
          title:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat",
          quantity: 1,
          Price: 699999,
        },
        {
          id: 2,
          title:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat",
          quantity: 1,
          Price: 699999,
        },
        {
          id: 3,
          title:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis nat",
          quantity: 1,
          Price: 699999,
        },
      ],
    };
  },
  mounted() {
    this.cart.forEach((data) => {
      this.totalPrice += data.quantity * data.Price;
    });
  },
  methods: {
    handleScroll: function () {
      this.scrolled = window.scrollY > 0;
    },
    decreseQuantity: function (params) {
      var index = this.cart.findIndex((x) => x.id == params);
      this.cart[index].quantity = this.cart[index].quantity
        ? (this.cart[index].quantity -= 1)
        : 0;
      if (!this.cart[index].quantity) {
        document.getElementById(params).remove();
      }

      this.totalPrice -= this.cart[index].Price;
    },
    increseQuantity: function (params) {
      var index = this.cart.findIndex((x) => x.id == params);
      this.cart[index].quantity =
        this.cart[index].quantity < 10 ? (this.cart[index].quantity += 1) : 10;

      this.totalPrice += this.cart[index].Price;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
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

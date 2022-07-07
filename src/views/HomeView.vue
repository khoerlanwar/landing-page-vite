<template>
  <main>
    <section id="carousel">
      <Carousel />
    </section>
    <div class="p-4">
      <section id="promo" class="py-4">
        <div class="text-xl lg:text-3xl font-bold text-center py-2">
          Promo Section
        </div>
        <div class="text-right">
          <router-link to="/" class="text-blue-600 text-xs lg:text-tiny">Lihat Semua</router-link>
        </div>
      </section>
      <section id="treatment" class="py-4">
        <div class="py-2 text-center">
          <div class="text-lg lg:text-3xl font-bold">Treatment Section</div>
          <div class="text-xs sm:text-sm">lorem ipsum deskription</div>
          <div class="text-right">
            <router-link to="/treatment" class="text-blue-600 text-xs lg:text-tiny">Lihat Semua</router-link>
          </div>
        </div>
        <div class="grid gap-3 lg:grid-cols-5 grid-cols-3 py-4">
          <div v-for="items in treatment" :key="items.id">
            <div class="flex justify-center">
              <router-link :to="'/treatment?q=' + items.title">
                <img :src="items.img" :alt="items.title"
                  class="rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 transition case-out-in hover:scale-105 delay-100 duration-100" />
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <section id="product" class="py-4">
        <div class="py-2 flex justify-between items-center">
          <div>
            <div class="text-lg lg:text-3xl font-bold">Product Section</div>
            <div class="text-xs lg:text-sm">lorem ipsum description</div>
          </div>
          <a href="/treatment" class="text-blue-600 text-xs lg:text-tiny">Lihat Semua</a>
        </div>
        <div class="flex space-x-3 flex-nowrap overflow-auto py-4" id="category">
          <div v-for="items in product" :key="items.cart_id" id="product-card"
            class="min-w-[160px] lg:min-w-[280px] my-2 hover:shadow-lg hover:rounded-lg transition duration-800 delay-400 animation ease-in-out p-2">
            <div class="flex w-full">
              <router-link :to="'product?q=&id=' + items.cart_id">
                <img :src="items.cart_img" alt="" class="rounded-lg" />
              </router-link>
            </div>
            <div class="flex flex-col py-4">
              <router-link :to="'product?q=&id=' + items.cart_id">
                <div class="text-sm lg:text-lg font-bold hover:text-orange-500">
                  {{ items.cart_title }}
                </div>
              </router-link>
              <div v-if="items.cart_price_discount" class="lg:text-xl font-bold text-red-500">
                Rp {{ items.cart_price_discount.toLocaleString("en-US") }}
              </div>
              <div v-if="items.cart_price_discount" class="flex items-center">
                <div class="text-slate-500 mr-4 text-sm lg:text-lg">
                  <s>Rp {{ items.cart_price.toLocaleString("en-US") }}</s>
                </div>
                <div class="text-red-500 text-sm bg-red-200 px-2 rounded">
                  <div class="text-xs lg:text-tiny">
                    {{ items.cart_discount }}% off
                  </div>
                </div>
              </div>
              <div v-else>
                <div class="text-slate-500 mr-4 text-sm lg:text-xl mb-8">
                  Rp {{ items.cart_price.toLocaleString("en-US") }}
                </div>
              </div>
            </div>
            <button @click="addCart(items.cart_id)"
              class="flex w-3/4 items-center bg-orange-500 m-auto rounded py-1 mb-4">
              <div class="m-auto text-white hover:opacity-75">+Keranjang</div>
            </button>
          </div>
        </div>
      </section>
      <section id="info" class="py-4">
        <div class="flex justify-center py-4">
          <div class="text-lg lg:text-3xl font-bold">Tentang Section</div>
        </div>
        <div class="relative block max-w-screens w-full">
          <div class="flex space-x-4 flex-nowrap overflow-auto py-6">
            <div class="min-w-[187px] lg:w-1/4 shadow-md border rounded">
              <div class="flex flex-col jusitfy-center items-center p-4">
                <div class="p-5 my-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-orange-400" fill="none"
                    viewBox="0 0 30 30" stroke="currentColor" stroke-width="1.6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div class="text-lg font-semibold">99+</div>
                <div class="text-md font-bold">Tentang Kategori</div>
              </div>
            </div>
            <div class="min-w-[187px] lg:w-1/4 shadow-md border rounded">
              <div class="flex flex-col jusitfy-center items-center p-4">
                <div class="p-5 my-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-orange-400" fill="none"
                    viewBox="0 0 30 30" stroke="currentColor" stroke-width="1.6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div class="text-lg font-semibold">99+</div>
                <div class="text-md font-bold">Tentang Kategori</div>
              </div>
            </div>
            <div class="min-w-[187px] lg:w-1/4 shadow-md border rounded">
              <div class="flex flex-col jusitfy-center items-center p-4">
                <div class="p-5 my-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-orange-400" fill="none"
                    viewBox="0 0 30 30" stroke="currentColor" stroke-width="1.6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div class="text-lg font-semibold">99+</div>
                <div class="text-md font-bold">Tentang Kategori</div>
              </div>
            </div>
            <div class="min-w-[187px] lg:w-1/4 shadow-md border rounded">
              <div class="flex flex-col jusitfy-center items-center p-4">
                <div class="p-5 my-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-orange-400" fill="none"
                    viewBox="0 0 30 30" stroke="currentColor" stroke-width="1.6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div class="text-lg font-semibold">99+</div>
                <div class="text-md font-bold">Tentang Kategori</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="artikel" class="py-4">
        <div class="flex justify-between items-center">
          <div class="lg:text-3xl font-bold w-3/4">Artikel Section</div>
          <router-link to="/article" class="text-xs lg:text-tiny text-blue-600">Lihat Semua</router-link>
        </div>
        <div class="flex space-x-3 flex-nowrap overflow-auto py-6 px-3">
          <div v-for="items in article" :key="items.id" class="flex flex-col lg:w-1/3 min-w-[340px]">
            <router-link :to="'/article?q=' + items.title"
              class="hover:scale-105 hover:shadow-md hover transition duration-800 delay-400 animation ease-in-out p-2">
              <div>
                <img :src="items.img" alt="img-article" class="rounded" />
              </div>
              <div class="flex justify-between items-center py-3">
                <div class="bg-orange-500 text-white p-1 px-3 rounded-md">
                  {{ items.category }}
                </div>
                <div>{{ items.date }}</div>
              </div>
              <div class="flex felx-wrap flex-col">
                <div class="text-tiny font-bold mb-3">
                  {{ items.title }}
                </div>
                <div class="text-xs text-slate-600">
                  {{ items.description }}
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Carousel from "@/components/CarouselComponent.vue";
import { useCartStore } from "../stores/carts";

export default {
  setup()
  {
    const cartStore = useCartStore()

    return { cartStore }
  },
  data()
  {
    return {
      treatment: [
        {
          id: 1,
          title: "Acne",
          description: "lorem ipsum",
          img: "https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Treatment+200x200",
        },
        {
          id: 2,
          title: "Aging",
          description: "lorem ipsum",
          img: "https://i.picsum.photos/id/651/200/200.jpg?hmac=p8_kpEZVVgCD0ruS4M5WHOZ2-VETfCi3aXmYAbav3NE",
        },
        {
          id: 3,
          title: "Body Sclupt",
          description: "lorem ipsum",
          img: "https://i.picsum.photos/id/455/200/200.jpg?hmac=YZhCbBjCYF0ha5dR9ElToDVwWcw05w0e4pAv5S9nZYg",
        },
        {
          id: 4,
          title: "Brightening",
          description: "lorem ipsum",
          img: "https://i.picsum.photos/id/893/200/200.jpg?hmac=MKUqbcyRrvAYoTmgHo74fEI3o9V4CH2kBrvWfmHkr7U",
        },
        {
          id: 5,
          title: "Face Sclupt",
          description: "lorem ipsum",
          img: "https://i.picsum.photos/id/779/200/200.jpg?hmac=qClHBmnKwT7Xt6flSVOh5Ax0tWLRo_gLVmwd4dkSVAo",
        },
        {
          id: 6,
          title: "Hair Treatment",
          description: "lorem ipsum",
          img: "https://i.picsum.photos/id/491/200/200.jpg?hmac=Zi1sOp0NH_d3eOa3qUg8-oDQJWvIkH8UkrAJZ7l-4wg",
        },
        {
          id: 7,
          title: "Pigmentation",
          description: "lorem ipsum",
          img: "https://i.picsum.photos/id/732/200/200.jpg?hmac=-1Xf4hDrUp28fyFDvesIbVP0judK8XABC6MYEnxTdyw",
        },
        {
          id: 8,
          title: "Scar",
          description: "lorem ipsum",
          img: "https://i.picsum.photos/id/393/200/200.jpg?hmac=1cxlqmpLdS274Utq1s9nhhevcTHNffgX3_0tnKc4Kgw",
        },
        {
          id: 9,
          title: "Scar",
          description: "lorem ipsum",
          img: "https://i.picsum.photos/id/53/200/200.jpg?hmac=NvXWlWpaKnDMb_phNyfwXppFuuNz0jK69wUnSFYQ6Ww",
        },
        {
          id: 10,
          title: "Scar",
          description: "lorem ipsum",
          img: "https://i.picsum.photos/id/655/200/200.jpg?hmac=skyBShySCLoGXt4Gy91C5mmi2yQeWaqtypiJFwTKM4M",
        },
      ],
      product: [
        {
          cart_id: 1,
          cart_title: "Nama Produk String",
          cart_price: 999999,
          cart_price_discount: 0,
          cart_discount: 0,
          cart_description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          cart_img: "https://dummyimage.com/304x304/b8b8b8/34385e.png&text=Product+304x304",
        },
        {
          cart_id: 2,
          cart_title: "Nama Produk String",
          cart_price: 999999,
          cart_price_discount: 0,
          cart_discount: 0,
          cart_description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          cart_img: "https://i.picsum.photos/id/185/304/304.jpg?hmac=Fbnunww8bfZhPDs0oZLVMsEO6IrA4OCNxJcK-emQRSU",
        },
        {
          cart_id: 3,
          cart_title: "Nama Produk String",
          cart_price: 999999,
          cart_price_discount: 699999,
          cart_discount: 20,
          cart_description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          cart_img: "https://i.picsum.photos/id/538/304/304.jpg?hmac=k5KoOineRBPgVlPGCy1IA78stw1Y54eG_u7541JuznM",
        },
        {
          cart_id: 4,
          cart_title: "Nama Produk String",
          cart_price: 999999,
          cart_price_discount: 699999,
          cart_discount: 20,
          cart_description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          cart_img: "https://i.picsum.photos/id/340/304/304.jpg?hmac=7ZmD5sA9n46RRBcqGODIo-oeMf57xrntSzShhjREhr8",
        },
        {
          cart_id: 5,
          cart_title: "Nama Produk String",
          cart_price: 999999,
          cart_price_discount: 699999,
          cart_discount: 20,
          cart_description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          cart_img: "https://i.picsum.photos/id/667/304/304.jpg?hmac=BZuCprZYH32xcpE98tHwNUaHk3pf9mwU-8ZNJ-ZUN4U",
        },
      ],
      article: [
        {
          id: 1,
          date: "01-01-2020",
          img: "https://i.picsum.photos/id/453/408/250.jpg?hmac=M7QkzdOJTVeRHGFkyFPDO7dY8RaAx3uRfPOssK9NQNs",
          title:
            "Artikel Title Lorem ipsum dolor sit amet, consectetuer adipiscing",
          category: "Kategori",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
        },
        {
          id: 2,
          date: "01-01-2020",
          img: "https://i.picsum.photos/id/892/408/250.jpg?hmac=rNt0qUgSN8rz7F-v9QLdxlbxL47hSC7JyHK4flw_bhU",
          title:
            "Artikel Title Lorem ipsum dolor sit amet, consectetuer adipiscing",
          category: "Kategori",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
        },
        {
          id: 3,
          date: "01-01-2020",
          img: "https://i.picsum.photos/id/808/408/250.jpg?hmac=PT-B991WaSiKapghwV9Mpk9Rdj3Wcw-baX1j81lROOc",
          title:
            "Artikel Title Lorem ipsum dolor sit amet, consectetuer adipiscing",
          category: "Kategori",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
        },
        {
          id: 4,
          date: "01-01-2020",
          img: "https://dummyimage.com/408x250/b8b8b8/34385e.png&text=Artikel+408x250",
          title:
            "Artikel Title Lorem ipsum dolor sit amet, consectetuer adipiscing",
          category: "Kategori",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
        },
      ],
    };
  },
  components: {
    Carousel,
  },
  methods:
  {
    addCart(params)
    {
      var index = this.product.findIndex((x) => x.cart_id == params);
      this.product[index].cart_quantity = 1;
      this.cartStore.addToCarts(this.product[index])
    },
  }
};
</script>

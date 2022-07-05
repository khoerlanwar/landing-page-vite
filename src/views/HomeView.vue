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
          <a href="#" class="text-blue-600 text-xs lg:text-tiny">Lihat Semua</a>
        </div>
      </section>
      <section id="treatment" class="py-4">
        <div class="py-2 text-center">
          <div class="text-lg lg:text-3xl font-bold">Treatment Section</div>
          <div class="text-xs sm:text-sm">lorem ipsum deskription</div>
          <div class="text-right">
            <a href="/treatment" class="text-blue-600 text-xs lg:text-tiny"
              >Lihat Semua</a
            >
          </div>
        </div>
        <div class="grid gap-3 lg:grid-cols-5 grid-cols-3 py-4">
          <div v-for="items in treatment" :key="items.id">
            <div class="flex justify-center">
              <a :href="'/treatment?q=' + items.title">
                <img
                  :src="items.img"
                  :alt="items.title"
                  class="rounded-md shadow-md hover:shadow-xl hover:-translate-y-1 transition case-out-in hover:scale-105 delay-100 duration-100"
                />
              </a>
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
          <a href="/treatment" class="text-blue-600 text-xs lg:text-tiny"
            >Lihat Semua</a
          >
        </div>
        <div class="flex space-x-3 flex-nowrap overflow-auto" id="category">
          <div
            v-for="items in product"
            :key="items.id"
            id="product-card"
            class="min-w-[160px] lg:min-w-[280px] my-2"
          >
            <div class="flex w-full">
              <img :src="items.img" alt="" class="rounded-lg" />
            </div>
            <div class="flex flex-col py-4">
              <div class="text-sm lg:text-tiny font-bold">
                {{ items.title }}
              </div>
              <div class="lg:text-xl font-bold text-red-500">
                Rp {{ items.price_discount }}
              </div>
              <div class="flex items-center">
                <div class="text-slate-500 mr-4 text-sm lg:text-lg">
                  <s>Rp {{ items.price }}</s>
                </div>
                <div class="text-red-500 text-sm bg-red-200 px-2 rounded">
                  <div class="text-xs lg:text-tiny">
                    {{ items.discount }}% off
                  </div>
                </div>
              </div>
            </div>
            <button
              class="flex w-3/4 items-center bg-orange-500 m-auto rounded py-1 mb-4"
            >
              <div class="m-auto text-white">+Keranjang</div>
            </button>
          </div>
        </div>
        <div class="py-2 flex justify-between items-center">
          <div>
            <div class="text-lg lg:text-3xl font-bold">Product Section</div>
            <div class="text-xs lg:text-sm">lorem ipsum description</div>
          </div>
          <a href="/treatment" class="text-blue-600 text-xs lg:text-tiny"
            >Lihat Semua</a
          >
        </div>
        <div class="flex space-x-3 flex-nowrap overflow-auto" id="category">
          <div
            v-for="items in product"
            :key="items.id"
            id="product-card"
            class="min-w-[160px] lg:min-w-[280px] my-2"
          >
            <div class="flex w-full">
              <img :src="items.img" alt="" class="rounded-lg" />
            </div>
            <div class="flex flex-col py-4">
              <div class="text-sm lg:text-tiny font-bold">
                {{ items.title }}
              </div>
              <div class="lg:text-xl font-bold text-red-500">
                Rp {{ items.price_discount }}
              </div>
              <div class="flex items-center">
                <div class="text-slate-500 mr-4 text-sm lg:text-lg">
                  <s>Rp {{ items.price }}</s>
                </div>
                <div class="text-red-500 text-sm bg-red-200 px-2 rounded">
                  <div class="text-xs lg:text-tiny">
                    {{ items.discount }}% off
                  </div>
                </div>
              </div>
            </div>
            <button
              class="flex w-3/4 items-center bg-orange-500 m-auto rounded py-1 mb-4"
            >
              <div class="m-auto text-white">+Keranjang</div>
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
                <div class="p-10 bg-slate-200">ICON</div>
                <div class="text-lg font-semibold">99+</div>
                <div class="text-md font-bold">Tentang Kategori</div>
              </div>
            </div>
            <div class="min-w-[187px] lg:w-1/4 shadow-md border rounded">
              <div class="flex flex-col jusitfy-center items-center p-4">
                <div class="p-10 bg-slate-200">ICON</div>
                <div class="text-lg font-semibold">99+</div>
                <div class="text-md font-bold">Tentang Kategori</div>
              </div>
            </div>
            <div class="min-w-[187px] lg:w-1/4 shadow-md border rounded">
              <div class="flex flex-col jusitfy-center items-center p-4">
                <div class="p-10 m-1 bg-slate-200">ICON</div>
                <div class="text-lg font-semibold">99+</div>
                <div class="text-md font-bold">Tentang Kategori</div>
              </div>
            </div>
            <div class="min-w-[187px] lg:w-1/4 shadow-md border rounded">
              <div class="flex flex-col jusitfy-center items-center p-4">
                <div class="p-10 bg-slate-200">ICON</div>
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
          <a href="/article" class="text-xs lg:text-tiny text-blue-600"
            >Lihat Semua</a
          >
        </div>
        <div class="flex space-x-3 flex-nowrap overflow-auto py-6 px-3">
          <div
            v-for="items in article"
            :key="items.id"
            class="flex flex-col lg:w-1/3 min-w-[340px]"
          >
            <a
              :href="'/article?q=' + items.title"
              class="hover:scale-105 hover:shadow-md hover:p-1"
            >
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
            </a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Carousel from "@/components/CarouselComponent.vue";

export default {
  components: {
    Carousel,
  },
  data() {
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
          img: "https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Treatment+200x200",
        },
        {
          id: 3,
          title: "Body Sclupt",
          description: "lorem ipsum",
          img: "https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Treatment+200x200",
        },
        {
          id: 4,
          title: "Brightening",
          description: "lorem ipsum",
          img: "https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Treatment+200x200",
        },
        {
          id: 5,
          title: "Face Sclupt",
          description: "lorem ipsum",
          img: "https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Treatment+200x200",
        },
        {
          id: 6,
          title: "Hair Treatment",
          description: "lorem ipsum",
          img: "https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Treatment+200x200",
        },
        {
          id: 7,
          title: "Pigmentation",
          description: "lorem ipsum",
          img: "https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Treatment+200x200",
        },
        {
          id: 8,
          title: "Scar",
          description: "lorem ipsum",
          img: "https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Treatment+200x200",
        },
        {
          id: 9,
          title: "Scar",
          description: "lorem ipsum",
          img: "https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Treatment+200x200",
        },
        {
          id: 10,
          title: "Scar",
          description: "lorem ipsum",
          img: "https://dummyimage.com/200x200/b8b8b8/34385e.png&text=Treatment+200x200",
        },
      ],
      product: [
        {
          id: 1,
          title: "Nama Produk String",
          price: 999.999,
          price_discount: 699.999,
          discount: 20,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          img: "https://dummyimage.com/304x304/b8b8b8/34385e.png&text=Produk+304x304",
        },
        {
          id: 2,
          title: "Nama Produk String",
          price: 999.999,
          price_discount: 699.999,
          discount: 20,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          img: "https://dummyimage.com/304x304/b8b8b8/34385e.png&text=Produk+304x304",
        },
        {
          id: 3,
          title: "Nama Produk String",
          price: 999.999,
          price_discount: 699.999,
          discount: 20,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          img: "https://dummyimage.com/304x304/b8b8b8/34385e.png&text=Produk+304x304",
        },
        {
          id: 4,
          title: "Nama Produk String",
          price: 999.999,
          price_discount: 699.999,
          discount: 20,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          img: "https://dummyimage.com/304x304/b8b8b8/34385e.png&text=Produk+304x304",
        },
        {
          id: 5,
          title: "Nama Produk String",
          price: 999.999,
          price_discount: 699.999,
          discount: 20,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          img: "https://dummyimage.com/304x304/b8b8b8/34385e.png&text=Produk+304x304",
        },
        {
          id: 6,
          title: "Nama Produk String",
          price: 999.999,
          price_discount: 699.999,
          discount: 20,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          img: "https://dummyimage.com/304x304/b8b8b8/34385e.png&text=Produk+304x304",
        },
      ],
      article: [
        {
          id: 1,
          date: "01-01-2020",
          img: "https://dummyimage.com/408x250/b8b8b8/34385e.png&text=Artikel+408x250",
          title:
            "Artikel Title Lorem ipsum dolor sit amet, consectetuer adipiscing",
          category: "Kategori",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
        },
        {
          id: 2,
          date: "01-01-2020",
          img: "https://dummyimage.com/408x250/b8b8b8/34385e.png&text=Artikel+408x250",
          title:
            "Artikel Title Lorem ipsum dolor sit amet, consectetuer adipiscing",
          category: "Kategori",
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
        },
        {
          id: 3,
          date: "01-01-2020",
          img: "https://dummyimage.com/408x250/b8b8b8/34385e.png&text=Artikel+408x250",
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
};
</script>

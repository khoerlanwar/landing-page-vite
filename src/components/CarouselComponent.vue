<template>
  <div class="md:pt-header-h pt-m-header-h overflow-hidden">
    <!-- Images Carousel -->
    <div v-for="item in slides" :key="item.id">
      <div v-show="activeSlide === item.id" class="flex-shrink-0 cursor-pointer">
        <a :href="item.link">
          <img :src="item.img" alt="" class="w-full shadow-md" />
        </a>
      </div>
    </div>
    <!-- Button Next -->
    <div class="absolute bottom-1/2 left-5 overflow-auto text-white">
      <button @click="
        activeSlide = activeSlide === 1 ? slides.length : activeSlide - 1
      ">
        <div class="p-2 rounded-full hover:border-slate-200 hover:border">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>
    </div>
    <!-- Button Previous -->
    <div class="absolute bottom-1/2 right-5 overflow-auto text-white">
      <button @click="
        activeSlide = activeSlide === slides.length ? 1 : activeSlide + 1
      ">
        <div class="p-2 rounded-full hover:border-slate-200 hover:border">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>
    </div>
    <!-- Slide Lenght -->
    <div class="bottom-10 overflow-auto text-white flex justify-center space-x-2 justify-center">
      <div v-for="item in slides" :key="item.id">
        <button class="w-4 h-1 rounded-full transition-colors duration-200 ease-out hover:bg-slate-600 hover:shadow-lg"
          :class="{
            'bg-orange-400': activeSlide === item.id,
            'bg-slate-300': activeSlide !== item.id,
          }" v-on:click="activeSlide = item.id"></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data()
  {
    return {
      activeSlide: 1,
      slides: [
        {
          id: 1,
          img: "https://i.picsum.photos/id/527/1248/600.jpg?hmac=z5eYNmvm3s_Au45M5Zw27CLcIAkmIsGJwfTUX-c99EY",
          title: "Carousel 1",
          link: "/",
        },
        {
          id: 2,
          img: "https://i.picsum.photos/id/366/1248/600.jpg?hmac=aOWO4J_Pi-eWPlDAWNiN54VvP4S0gaFV5tSB9TGK1Tc",
          title: "Carousel 2",
          link: "#",
        },
        {
          id: 3,
          img: "https://placeimg.com/1248/600/any",
          title: "Carousel 3",
          link: "#",
        },
        // {
        //   id: 3,
        //   img: "https://dummyimage.com/1248x600/9D7B9A/34385e.png&text=Carousel+3+1248x600",
        //   title: "Carousel 3",
        //   link: "#",
        // },
      ],
    };
  },
  methods: {
    loop: function ()
    {
      setInterval(() =>
      {
        this.activeSlide =
          this.activeSlide === this.slides.length ? 1 : this.activeSlide + 1;
      }, 5000);
    },
  },
  mounted()
  {
    this.loop();
  },
};
</script>
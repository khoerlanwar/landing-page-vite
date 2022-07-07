<template>
  <main>
    <div class="flex flex-col justify-center pt-10 text-xl">
      <div class="text-center">Testing Pinia</div>
      <button type="button" @click="addCart(1)" class="bg-blue-500">abcd</button>
    </div>
  </main>
</template>

<script>
import { useCounterStore } from '../../stores/counter';

export default {
  name: "LandingBrochureSection",
  setup()
  {
    const counterStore = useCounterStore()

    return { counterStore }
  },
  data()
  {
    return {
      product: [
        {
          id: 1,
          title: "Nama Produk String",
          price: 999999,
          price_discount: 0,
          discount: 0,
          description:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
          img: "https://dummyimage.com/304x304/b8b8b8/34385e.png&text=Product+304x304",
        },
      ],
    };
  },

  mounted()
  {
  },
  methods: {
    addCart(params)
    {
      this.product.map((data) =>
      {
        if (data.id == params)
        {
          this.counterStore.addToCart(data)
        }
      })

      console.log('New Count:', this.counterStore.cart)
    },
  },
};
</script>

<style lang="scss" scoped>
</style>

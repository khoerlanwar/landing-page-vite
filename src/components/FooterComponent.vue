<template>
  <footer class="py-11 w-full bg-[#4D4D4D] text-white">
    <div class="lg:container w-full mx-auto p-5">
      <div class="grid gap-8 sm:grid-cols-3 lg:grid-cols-12 md:grid-cols-8">
        <div class="col-span-3">
          <img src="https://dummyimage.com/286x100/ffffff/34385e.png&text=Logo+286x100" alt="" />
          <div class="text-lg my-4">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </div>
        </div>
        <div class="col-span-3">
          <div class="text-xl mb-4 font-bold">Dukungan</div>
          <router-link to="/">
            <div class="flex flex-row hover:text-orange-400">
              <div class="text-tiny">Kebijakan Privasi</div>
              <IconChevron class="mx-3 w-[18px]" />
            </div>
          </router-link>
          <router-link to="/">
            <div class="flex flex-row hover:text-orange-400">
              <div class="text-tiny">Syarat & Ketentuan</div>
              <IconChevron class="mx-3 w-[18px]" />
            </div>
          </router-link>
          <router-link to="/">
            <div class="flex flex-row hover:text-orange-400">
              <div class="text-tiny">Pusat Bantuan</div>
              <IconChevron class="mx-3 w-[18px]" />
            </div>
          </router-link>
          <div class="sm:text-sm lg:text-lg font-bold my-2">Ikuti Kami</div>
          <div class="flex space-x-3">
            <a href="https://instagram.com/nmwclinic" target="_blank">
              <IconInstagram />
            </a>
            <a href="https://tiktok.com/@nmwclinic" target="_blank">
              <IconTiktok />
            </a>
          </div>
        </div>
        <div class="col-span-3">
          <div class="text-xl font-bold mb-4">Hubungi Kami</div>
          <div class="text-tiny font-bold">Alamat :</div>
          <div class="text-sm mb-2 text-[#CAC9C9]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis nat
          </div>
          <div class="font-bold">Email :</div>
          <div class="text-[#CAC9C9]">info@nmwclinic.co.id</div>
          <div class="font-bold">Customer Care :</div>
          <div class="text-[#CAC9C9]">999 9999 9999</div>
        </div>
        <div class="col-span-3">
          <div class="text-xl font-bold mb-4">Navigasi</div>
          <div class="flex flex-col space-y-2">
            <router-link to="/article">
              <div class="hover:text-orange-400">Artikel</div>
            </router-link>
            <router-link to="/brochure">
              <div class="hover:text-orange-400">Brosur</div>
            </router-link>
            <router-link to="/treatment">
              <div class="hover:text-orange-400">Perawatan</div>
            </router-link>
            <router-link to="/product">
              <div class="hover:text-orange-400">Produk</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import IconChevron from "@/components/icons/IconChevron.vue";
import IconInstagram from "@/components/icons/IconInstagram.vue";
import IconTiktok from "@/components/icons/IconTiktok.vue";

export default {
  name: "LandingFooterComponent",
  components: {
    IconChevron,
    IconInstagram,
    IconTiktok,
  },
  data()
  {
    return {};
  },

  mounted() { },

  methods: {},
};
</script>

<style scoped>
</style>

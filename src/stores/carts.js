import { defineStore } from "pinia";

export const useCartStore = defineStore("carts", {
  state: () => ({
    carts: [],
    total: 0,
  }),
  getters: {
    totalCarts()
    {
      return this.carts.length ? this.carts.length : JSON.parse(localStorage.getItem("carts")).length;
    },
    myCarts()
    {
      return this.carts.length ? this.carts : JSON.parse(localStorage.getItem("carts"));
    },
    totalPrice()
    {
      const carts = this.carts.length ? this.carts : JSON.parse(localStorage.getItem("carts"));
      var total = this.total ? this.total : 0;
      carts.forEach((data) =>
      {
        total += data.cart_price * data.cart_quantity
      })
      return total
    }
  },
  actions: {
    addToCarts(data)
    {
      this.carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];

      if (localStorage.getItem("carts"))
      {
        var index = this.carts.findIndex((x) => x.cart_id == data.cart_id)
        if (~index)
        {
          this.carts[index].cart_quantity += 1;
        } else
        {
          this.carts.push(data);
        }
      } else
      {
        this.carts.push(data);
      }

      localStorage.setItem("carts", JSON.stringify(this.carts));
    },
    decreseQuantity(id)
    {
      this.carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];
      let index = this.carts.findIndex((x) => x.cart_id == id);
      this.carts[index].cart_quantity -= this.carts[index].cart_quantity ? 1 : 0;
      localStorage.setItem("carts", JSON.stringify(this.carts));

      return this.carts[index].cart_quantity;
    },
    increseQuantity(id)
    {
      this.carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];
      let index = this.carts.findIndex((x) => x.cart_id == id);
      this.carts[index].cart_quantity += this.carts[index].cart_quantity >= 10 ? 0 : 1;
      localStorage.setItem("carts", JSON.stringify(this.carts));

      return this.carts[index].cart_quantity;
    },
    removeCarts(id)
    {
      this.carts = localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [];
      let index = this.carts.findIndex((x) => x.cart_id == id);
      this.carts.splice(index, 1);
      localStorage.setItem("carts", JSON.stringify(this.carts));
    },
  },
});

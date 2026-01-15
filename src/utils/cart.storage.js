import localforage from 'localforage';

export const cartStorage = {
  async saveCart(cartData) {
   try {
     if (!cartData || cartData.length === 0) {
       await localforage.removeItem('cartData')
     }
     else {
       await localforage.setItem('cartData', cartData)
     }
   }
   catch (error) {
     console.error("Error saving cart:", error);
   }
  },
  async loadCart() {
    try {
      const cartData = await localforage.getItem("cartData");
      return cartData || [];
    } catch (error) {
      console.error("Error loading cart:", error);
      return [];
    }
  },
  async clearCart() {
    try {
      await localforage.removeItem("cartData");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  },
}
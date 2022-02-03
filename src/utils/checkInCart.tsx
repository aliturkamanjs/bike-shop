export const CheckInCart = (cart: ProductPorps, product: ProductPorps) => {
  return cart.find((c: ProductPorps) => c.id === product.id);
};

import { contextProps } from "./dataInterface";

export const CheckInCart = (cart: any, product: any) => {
  
  return cart.find((c: contextProps) => c.id === product.id);
};

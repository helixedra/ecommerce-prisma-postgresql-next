"use client";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - Quantity: {item.quantity}
            </p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export const CartIndicator = () => {
  const { cart } = useCart();

  if (cart.length === 0) return null;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
      {totalItems}
    </span>
  );
};

import React, { useState } from "react";
import CartDetail from "../Pages/CartDetail";

export default function ShowCart() {
  const [showCart, setShowCart] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowCart(true)}
        className="bg-green-500 px-4 py-2 text-white rounded"
      >
        Open Cart
      </button>

      {showCart && <CartDetail onClose={() => setShowCart(false)} />}
    </div>
  );
}

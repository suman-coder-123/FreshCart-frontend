import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CartDetail() {
  const [cartitem, setcartitem] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    cartdata();
  }, []);

  const cartdata = () => {
    axios
      .get("https://freshcart-backend-opal.vercel.app/allcartitem")
      .then((res) => {
        const updated = res.data.cartitem.map((i) => ({
          ...i,
          qty: Number(i.weightUnit) || 1,
        }));
        setcartitem(updated);
      });
  };

  const removeitem = (item) => {
    axios
      .post("https://freshcart-backend-opal.vercel.app/removecartitem", {
        item,
      })
      .then((res) => {
        if (res.data.status) {
          window.location.reload();
        }
      });
  };

  const increment = (id) => {
    setcartitem((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, qty: Number(item.qty) + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setcartitem((prev) =>
      prev.map((item) =>
        item._id === id
          ? { ...item, qty: Math.max(1, Number(item.qty) - 1) }
          : item
      )
    );
  };

  // Total sum
  const sum = cartitem.reduce(
    (total, item) => total + item.regularPrice * item.qty,
    0
  );

  return (
    <>
      {isOpen && (
        <div className="fixed z-40">
          <div className="fixed top-0 right-0 w-1/2 h-full shadow-lg z-50 flex flex-col">
            <div className="flex justify-between items-center px-5">
              <div>
                <h1 className="text-[#21313c] text-2xl font-medium">
                  Shop Cart ₹{sum}
                </h1>
                <p className="text-[#5c6c75] font-medium">
                  Location in 382480
                </p>
              </div>

              <Link to="/Home">
                <button onClick={() => setIsOpen(false)}>
                  <RxCross2 className="w-5 h-5 text-gray-500" />
                </button>
              </Link>
            </div>

            <div className="overflow-y-auto flex-1 px-5">
              {cartitem.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image1}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium px-4 whitespace-nowrap">
                        {item.title}
                      </p>
                      <button
                        onClick={() => removeitem(item)}
                        className="text-sm px-4 text-green-600 flex items-center gap-1"
                      >
                        <FaRegTrashAlt className="w-4 h-4" />
                        <span className="text-sm text-[#5c6c75] cursor-pointer">
                          Remove
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center px-4">
                    <button
                      onClick={() => decrement(item._id)}
                      className="px-2 border border-gray-300 rounded-l-md"
                    >
                      -
                    </button>

                    <span className="px-3 border border-gray-300">
                      {item.qty}
                    </span>

                    <button
                      onClick={() => increment(item._id)}
                      className="px-2 border border-gray-300 rounded-r-md"
                    >
                      +
                    </button>
                  </div>

                  <div>
                    <p className="px-4 font-bold">
                      ₹{item.regularPrice * item.qty}
                    </p>
                  </div>
                </div>
              ))}

              <div className="p-4 border-t flex justify-between">
                <Link to="/Home">
                  <button className="bg-green-600 text-white px-4 py-2 rounded">
                    Continue Shopping
                  </button>
                </Link>

                <Link
                  to="/Chackout"
                  state={{ totalAmount: sum }} // ⭐ sending sum to checkout
                >
                  <button className="bg-black text-white px-4 py-2 rounded">
                    Proceed To Checkout
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import React, { useContext, useState } from "react";
import { Context } from "../context/MyContext";

const Cart = () => {
  const { cart, updateQty, setCart } = useContext(Context);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    setOrderPlaced(true);
    setCart([]);
  };

  if (orderPlaced) {
    return (
      <div className="max-w-7xl mx-auto p-8">
        <div
          className="border p-16 flex flex-col items-center justify-center text-center"
          style={{
            background: "#EFE6D0",
            borderColor: "#C9BB98",
          }}
        >
          <p
            className="text-3xl mb-3"
            style={{
              color: "#232520",
              fontFamily: "'Fraunces', serif",
            }}
          >
            Order Placed!
          </p>
          <p
            className="text-sm max-w-sm mb-6"
            style={{
              color: "#8A7C58",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Thanks for shopping with us — your order is on its way.
          </p>
          <button
            onClick={() => setOrderPlaced(false)}
            className="px-6 py-3 uppercase tracking-wider text-sm font-semibold transition-all duration-100 active:scale-95 cursor-pointer"
            style={{
              background: "#2F4A3C",
              color: "#EFE6D0",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-8 grid lg:grid-cols-3 gap-8 items-start">
      {/* LEFT */}
      <div
        className="lg:col-span-2 border"
        style={{
          background: "#EFE6D0",
          borderColor: "#C9BB98",
        }}
      >
        <div className="border-b border-[#C9BB98] p-5">
          <h1
            className="text-3xl"
            style={{
              fontFamily: "'Fraunces', serif",
            }}
          >
            Shopping Cart
          </h1>
          <p
            className="mt-2 text-sm"
            style={{
              color: "#5c5544",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {cart.length} Items Selected
          </p>
        </div>

        {cart.length === 0 ? (
          <div
            className="p-10 flex flex-col items-center justify-center text-center"
            style={{ minHeight: "275px" }}
          >
            <img src="./cart.svg" alt="Empty cart" className="h-16 mb-4" />
            <p
              className="text-3xl mb-2"
              style={{
                color: "#232520",
                fontFamily: "'Fraunces', serif",
              }}
            >
              Your Cart is Empty
            </p>
            <p
              className="text-sm max-w-sm"
              style={{
                color: "#8A7C58",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Time to go shopping — add something you love and it'll show up here.
            </p>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[110px_1fr_130px] gap-6 items-center p-5 border-b border-[#C9BB98]"
            >
              <div
                className="h-28 flex items-center justify-center"
                style={{ background: "#F8F4E9" }}
              >
                <img src={item.image} alt="" className="h-20 object-contain" />
              </div>

              <div>
                <h2
                  className="text-xl"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {item.title}
                </h2>
                <p
                  className="uppercase tracking-[.2em] text-[11px] mt-2"
                  style={{
                    color: "#4C6F58",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Premium Collection
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="w-8 h-8 border cursor-pointer transition-all duration-100 active:scale-95 border-[#C9BB98]"
                  >
                    −
                  </button>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, 1)}
                    className="w-8 h-8 border cursor-pointer transition-all duration-100 active:scale-95 border-[#C9BB98]"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p
                  className="text-2xl font-semibold"
                  style={{
                    color: "#B5502A",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  ${(item.price * item.qty).toFixed(2)}
                </p>
                <button
                  onClick={() => updateQty(item.id, -item.qty)}
                  className="mt-4 text-sm cursor-pointer active:scale-95 transition-all duration-100 hover:underline decoration-[#B5502A] underline-offset-2"
                  style={{
                    color: "#B5502A",
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT */}
      <div
        className="border h-fit"
        style={{
          background: "#EFE6D0",
          borderColor: "#C9BB98",
        }}
      >
        <div className="p-6">
          <h2
            className="text-2xl"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Order Summary
          </h2>
          <div
            className="my-6 border-t border-dashed"
            style={{ borderColor: "#C9BB98" }}
          />
          <div className="space-y-4">
            <div className="flex justify-between">
              <span style={{ fontFamily: "IBM Plex Mono" }}>Subtotal</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span style={{ fontFamily: "IBM Plex Mono" }}>Shipping</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                FREE
              </span>
            </div>
            <div className="flex justify-between">
              <span style={{ fontFamily: "IBM Plex Mono" }}>Tax</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
                $12.50
              </span>
            </div>
            <div
              className="border-t pt-5 mt-5 flex justify-between text-xl"
              style={{ borderColor: "#C9BB98" }}
            >
              <span style={{ fontFamily: "'Fraunces', serif" }}>Total</span>
              <span
                style={{
                  color: "#B5502A",
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                ${(subtotal + 12.5).toFixed(2)}
              </span>
            </div>
          </div>

          <button
            disabled={cart.length === 0}
            onClick={handleCheckout}
            className="mt-8 w-full py-3 uppercase tracking-wider font-semibold transition-all duration-100 active:scale-95 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100"
            style={{
              background: "#2F4A3C",
              color: "#EFE6D0",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
import React from "react";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      title: "Samsung 49-Inch CHG90",
      price: 999.99,
      qty: 1,
      image:
        "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    },
    {
      id: 2,
      title: "Lock and Love Jacket",
      price: 29.95,
      qty: 2,
      image:
        "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="max-w-7xl mx-auto p-8 grid lg:grid-cols-3 gap-8">
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
            {cartItems.length} Items Selected
          </p>
        </div>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[110px_1fr_130px] gap-6 items-center p-5 border-b border-[#C9BB98]"
          >
            <div
              className="h-28 flex items-center justify-center"
              style={{
                background: "#F8F4E9",
              }}
            >
              <img
                src={item.image}
                alt=""
                className="h-20 object-contain"
              />
            </div>

            <div>
              <h2
                className="text-xl"
                style={{
                  fontFamily: "'Fraunces', serif",
                }}
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
                <button className="w-8 h-8 border border-[#C9BB98]">
                  −
                </button>

                <span
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                  }}
                >
                  {item.qty}
                </span>

                <button className="w-8 h-8 border border-[#C9BB98]">
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
                className="mt-4 text-sm"
                style={{
                  color: "#B5502A",
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
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
            style={{
              fontFamily: "'Fraunces', serif",
            }}
          >
            Order Summary
          </h2>

          <div
            className="my-6 border-t border-dashed"
            style={{
              borderColor: "#C9BB98",
            }}
          />

          <div className="space-y-4">
            <div className="flex justify-between">
              <span style={{fontFamily: 'IBM Plex Mono'}}>Subtotal</span>

              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between">
              <span style={{fontFamily: 'IBM Plex Mono'}}>Shipping</span>

              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                FREE
              </span>
            </div>

            <div className="flex justify-between">
              <span style={{fontFamily: 'IBM Plex Mono'}}>Tax</span>

              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                }}
              >
                $12.50
              </span>
            </div>

            <div
              className="border-t pt-5 mt-5 flex justify-between text-xl"
              style={{
                borderColor: "#C9BB98",
              }}
            >
              <span
                style={{
                  fontFamily: "'Fraunces', serif",
                }}
              >
                Total
              </span>

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
          className="mt-8 w-full py-3 uppercase tracking-wider font-semibold transition-all duration-100 active:scale-95 cursor-pointer"
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
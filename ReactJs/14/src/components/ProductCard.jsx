import { useEffect } from "react";

function loadFontsOnce() {
  if (document.getElementById("product-card-fonts")) return;

  const link = document.createElement("link");
  link.id = "product-card-fonts";
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Fraunces:wght@500;600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap";

  document.head.appendChild(link);
}

function Stars({ rate }) {
  const full = Math.round(rate);

  return (
    <span className="inline-flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="11"
          height="11"
          viewBox="0 0 20 20"
          fill={i < full ? "#B5502A" : "none"}
          stroke="#B5502A"
          strokeWidth="1.4"
        >
          <path
            d="M10 1.5l2.6 5.6 6.1.6-4.6 4.2 1.3 6-5.4-3-5.4 3 1.3-6L1.3 7.7l6.1-.6z"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </span>
  );
}

export default function ProductCard({ product }) {
  useEffect(() => {
    loadFontsOnce();
  }, []);

  const { id, title, price, image, rating, category } = product;

  const words = title.split(" ");
  const brand = words.slice(0, 3).join(" ");
  const subtitle = words.slice(3).join(" ");

  return (
    <div
      className="relative flex flex-col h-full"
      style={{
        backgroundColor: "#EFE6D0",
        border: "1px solid #C9BB98",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-3">
        <span
          className="text-[10px] uppercase tracking-[0.18em] font-semibold"
          style={{
            color: "#4C6F58",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {category}
        </span>

        <span
          className="text-[10px]"
          style={{
            color: "#8A7C58",
            fontFamily: "'IBM Plex Mono', monospace",
          }}
        >
          #{String(id).padStart(3, "0")}
        </span>
      </div>

      {/* Image */}
      <div className="relative px-6 pt-3 pb-4">
        <div
          className="h-44 flex items-center justify-center"
          style={{
            background: "#F8F4E9",
          }}
        >
          <img
            src={image}
            alt={title}
            className="h-36 object-contain transition duration-300 hover:scale-105"
          />
        </div>

        {/* Rating Badge */}
        <div
          className="absolute -top-1 -right-1 w-14 h-16 flex flex-col justify-center items-center"
          style={{
            background: "#2F4A3C",
            transform: "rotate(7deg)",
            clipPath:
              "polygon(0 0,100% 0,100% 78%,50% 100%,0 78%)",
          }}
        >
          <span
            className="text-[13px] font-semibold"
            style={{
              color: "#EFE6D0",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            {rating.rate}
          </span>

          <span className="w-1.5 h-1.5 rounded-full mt-1 bg-[#EFE6D0]" />
        </div>
      </div>

      {/* Divider */}
      <svg
        viewBox="0 0 300 10"
        className="w-full h-2.5"
        preserveAspectRatio="none"
      >
        <path
          d="M0 5 Q20 0,40 5 T80 5 T120 5 T160 5 T200 5 T240 5 T280 5 T300 5"
          fill="none"
          stroke="#C9BB98"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      </svg>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
        <h2
          className="text-[17px] leading-snug"
          style={{
            color: "#232520",
            fontFamily: "'Fraunces', serif",
            fontWeight: 600,
          }}
        >
          {brand}
        </h2>

        {/* Fixed Description Height */}
        <div className="h-14 mt-2">
          <p
            className="text-[12.5px] leading-snug"
            style={{
              color: "#5C5544",
              fontFamily: "'Inter', sans-serif",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Rating + Price */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-2">
            <Stars rate={rating.rate} />

            <span
              className="text-[11px]"
              style={{
                color: "#8A7C58",
                fontFamily: "'IBM Plex Mono', monospace",
              }}
            >
              ({rating.count})
            </span>
          </div>

          <span
            className="text-[15px] font-semibold"
            style={{
              color: "#B5502A",
              fontFamily: "'IBM Plex Mono', monospace",
            }}
          >
            ${price.toFixed(2)}
          </span>
        </div>

        {/* Button */}
        <button
          className="mt-auto w-full py-3 uppercase tracking-wider font-semibold transition-all duration-100 active:scale-95 cursor-pointer"
          style={{
            background: "#2F4A3C",
            color: "#EFE6D0",
            fontFamily: "'Inter', sans-serif",
            
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
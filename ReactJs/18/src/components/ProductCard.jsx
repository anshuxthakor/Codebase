import React from "react";
import DrawingHeader from "./utils/DrawingHeader";
import SpecCard from "./utils/SpecCard";
import StatusBadge from "./utils/StatusBadge";

const ProductCard = ({ product, maxWidth = "max-w-md" }) => {
  const { title, price, category, image, rating, description } = product;
  const inStock = (rating?.count ?? 0) > 0;

  return (
    <SpecCard maxWidth={maxWidth}>
      <DrawingHeader label={`dwg no. 00${product.id} — product`} />
      <div className="flex gap-4 md:gap-6 pb-4 border-b border-[#16324f]/15">
        <div
          className="shrink-0 flex items-center justify-center border-[1.5px] border-[#16324f] bg-white p-2 overflow-hidden"
          style={{ width: "160px", height: "200px" }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="min-w-0 flex-1 flex flex-col">
          <h2 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#16324f] leading-tight line-clamp-2">
            {title}
          </h2>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="h-0.75 w-6 bg-[#d7263d]" />
            <span className="font-mono text-[10px] text-[#5b7089] capitalize truncate">
              {category}
            </span>
          </div>
          <p className="font-mono text-2xl font-bold text-[#16324f] mt-1">
            ${price}
          </p>

          <p className="text-sm text-[#5b7089] mt-3 max-w-2xl line-clamp-3">
            {description}
          </p>

          <div className="mt-auto pt-2 flex items-center justify-between gap-2">
            <span className="font-mono text-[10px] text-[#5b7089]">
              {rating?.rate ?? "—"} / 5 &middot; {rating?.count ?? 0} reviews
            </span>
            <StatusBadge
              label={inStock ? "In stock" : "Unreviewed"}
              color={inStock ? "#2f9e44" : "#a9b7c4"}
            />
          </div>
        </div>
      </div>
    </SpecCard>
  );
};

export default ProductCard;
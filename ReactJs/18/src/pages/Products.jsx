import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { axiosInstance } from "../config/axiosInstance";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsData = async () => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.get("/products");
      console.log("Products Api Response —> ", response);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-black uppercase tracking-tight text-[#16324f] leading-none">
        Product Catalog
      </h1>
      <div className="flex items-center gap-2 mt-2 mb-8">
        <span className="h-0.75 w-8 bg-[#d7263d]" />
        <span className="font-mono text-[11px] text-[#5b7089]">
          {isLoading
            ? "loading records"
            : `${products.length} ${products.length === 1 ? "item" : "items"} on file`}
        </span>
      </div>

      {isLoading ? (
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#5b7089] animate-pulse">
          <span className="h-2 w-2 bg-[#d7263d]" />
          Fetching product data...
        </div>
      ) : products.length === 0 ? (
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-[#5b7089]">
          No records found.
        </p>
      ) : (
        <div className="flex flex-col gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              maxWidth="max-w-none"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
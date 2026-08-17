import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [searchData, setSearchData] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true);

  let getProducts = async () => {
    let response = await axios.get("https://fakestoreapi.com/products");
    setAllProducts(response.data);
    setProductsData(response.data);
    setLoading(false);
  };

  // Filters from the untouched source list, never from itself
  let filteredData = () => {
    let result = allProducts.filter((val) =>
      val.title.toLowerCase().includes(searchData.toLowerCase()),
    );
    setProductsData(result);
  };

  // Debouncing...
  useEffect(() => {
    if (!searchData) {
      setProductsData(allProducts);
      return;
    }
    let timeout = setTimeout(() => {
      filteredData();
    }, 700);
    return () => clearTimeout(timeout);
  }, [searchData]);

  // Throttling...
  useEffect(() => {
    let throttle = false;
    let handleScroll = () => {
      if (throttle) return;
      throttle = true;
      setScrollY(window.scrollY);
      setTimeout(() => {
        throttle = false;
      }, 2000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Header */}
      <header className="border-b border-hairline">
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-8">
          <div className="flex items-baseline justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs tracking-[0.2em] text-olive uppercase mb-2">
                Inventory Sheet — scroll {scrollY}px
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                The Product Ledger
              </h1>
            </div>
            <p className="text-xs text-ink/50 max-w-55 text-right">
              {productsData.length} of {allProducts.length} items listed
            </p>
          </div>

          <div className="mt-8 relative max-w-md">
            <input
              className="w-full bg-transparent border-b border-ink/30 py-2.5 pr-8 text-sm placeholder:text-ink/40 focus:outline-none focus:border-rust transition-colors"
              type="text"
              placeholder="search the ledger..."
              value={searchData}
              onChange={(e) => setSearchData(e.target.value)}
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-xs text-ink/30">
              700ms
            </span>
          </div>
        </div>
      </header>

      {/* Product list */}
      <main className="max-w-6xl mx-auto px-6 py-10">
        {loading ? (
          <p className="text-sm text-ink/50">loading inventory…</p>
        ) : productsData.length === 0 ? (
          <p className="text-sm text-ink/50">
            No entries match "{searchData}".
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline border border-hairline">
            {productsData.map((product, i) => (
              <div
                key={product.id}
                className="group relative bg-paper p-6 flex flex-col hover:bg-white transition-colors duration-200"
              >
                {/* Index number */}
                <span className="text-[11px] text-ink/35 mb-3">
                  No. {String(i + 1).padStart(3, "0")}
                </span>

                {/* Image */}
                <div className="h-40 flex items-center justify-center mb-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Category */}
                <span className="text-[10px] tracking-wider uppercase text-olive mb-2">
                  {product.category}
                </span>

                {/* Title */}
                <h2 className="font-display text-lg font-semibold leading-snug mb-3 line-clamp-2">
                  {product.title}
                </h2>

                {/* Rating */}
                {product.rating && (
                  <p className="text-[11px] text-ink/40 mb-4">
                    ★ {product.rating.rate} · {product.rating.count} reviews
                  </p>
                )}

                {/* Price stamp */}
                <div className="mt-auto pt-3 border-t border-hairline flex items-center justify-between">
                  <span className="text-xl font-medium text-rust -rotate-2 inline-block">
                    ${product.price}
                  </span>
                  <button className="text-[11px] uppercase tracking-wide border border-ink/20 px-3 py-1.5 hover:bg-ink hover:text-paper transition-colors">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default App;

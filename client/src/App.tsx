import { useState } from "react";
import SearchBox from "./components/SearchBox";
import ProductList from "./components/ProductList";
import type { Product } from "./types";
// CHALLENGE TODO: find the existing API helper and connect it.

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch(query: string) {
    setError("");
    setLoading(true);
    try {
      // CHALLENGE TODO: call the appropriate function and update state.
      throw new Error("Search handler is not wired up");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return <main><h1>Product Finder</h1><p>Find products in the sample catalogue.</p>
    <SearchBox onSearch={handleSearch}/>
    {loading && <p>Searching...</p>}
    {error && <p role="alert">{error}</p>}
    <ProductList products={products}/>
  </main>;
}

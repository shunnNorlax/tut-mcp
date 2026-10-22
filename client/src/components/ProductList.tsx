import type { Product } from "../types";
export default function ProductList({ products }: { products: Product[] }) {
  if (!products.length) return <p>No products to show yet.</p>;
  return <ul>{products.map(p => <li key={p.id}><strong>{p.name}</strong> — ${p.price.toFixed(2)} <small>({p.category})</small></li>)}</ul>;
}

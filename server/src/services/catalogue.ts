import { products } from "../data/products.js";
export function searchCatalogue(query: string) {
  const term = query.trim().toLowerCase();
  return products.filter(p => p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term));
}

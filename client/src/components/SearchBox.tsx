type Props = { onSearch: (query: string) => void };
export default function SearchBox({ onSearch }: Props) {
  return <form onSubmit={(event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    onSearch(String(form.get("query") ?? ""));
  }}>
    <input name="query" aria-label="Search products" placeholder="Search phones, laptops..." />
    <button type="submit">Search</button>
  </form>;
}

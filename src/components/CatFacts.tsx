// src/CatFacts.tsx
import { useEffect, useState } from "react";
import type { ApiResponse } from "../schemas";
import { apiFetch } from "../utils/fetch";

export default function CatFacts() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await apiFetch(page);
        setData(res);
      } catch (error) {
        setError(error instanceof Error ? error.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [page]);

  if (loading) return <p>Loading cat facts...</p>;

  if (error) return <p>Error: {error}</p>;

  if (!data) return null;

  return (
    <main>
      <h2>Cat Facts</h2>
      <p>
        Showing {data.from}-{data.to} of {data.total} · Page {data.current_page} of {data.last_page}
      </p>

      <ul>
        {data.data.map((item, i) => (
          <li key={i}>
            <p>{item.fact}</p>
            <span>{item.length} characters</span>
          </li>
        ))}
      </ul>

      <nav>
        {data.links.map((link, i) => {
          const label = link.label;
          const pageNum = link.page;

          if (!link.url || pageNum == null)
            return (
              <button key={i} disabled={true}>
                {label}
              </button>
            );

          return (
            <button key={i} onClick={() => setPage(pageNum)} disabled={link.active}>
              {label}
            </button>
          );
        })}
      </nav>
    </main>
  );
}

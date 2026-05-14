import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import type { APITypes } from "../API/api-types";
import { useState } from "react";

export default function CryptoPage() {
  const [page, setPage] = useState(1);
  const perPage = 20;

  const { data, isLoading, error } = useQuery({
    queryKey: ["crypto"],

    queryFn: async (): Promise<APITypes[]> => {
      const response = await axios.get(
        "https://Api.BrsApi.ir/Market/Cryptocurrency.php?key=Bu4lxVRjZbzcC4tLuC5C3rLYn7441IX9",
      );

      return response.data;
    },

    refetchInterval: 10000,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg text-text text-4xl flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-bg text-danger flex items-center justify-center">
        Error loading data
      </div>
    );
  }
  const start = (page - 1) * perPage;
  const currentCoins = data?.slice(start, start + perPage);

  const totalPages = Math.ceil((data?.length || 0) / perPage);
  return (
    <div className="min-h-screen bg-bg text-text p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Crypto Market</h1>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {currentCoins?.map((coin, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-card p-5 shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <img
                    src={coin.link_icon}
                    alt={coin.name}
                    className="w-12 h-12 rounded-full"
                  />

                  <div>
                    <h2 className="text-lg font-bold">{coin.name}</h2>

                    <p className="text-text-muted text-sm">{coin.name_en}</p>
                  </div>
                </div>

                <div
                  className={`font-bold text-sm px-3 py-1 rounded-full ${
                    coin.change_percent >= 0
                      ? "bg-success/20 text-success"
                      : "bg-danger/20 text-danger"
                  }`}
                >
                  {coin.change_percent}%
                </div>
              </div>

              {/* Prices */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">Price (USD)</span>

                  <span className="font-bold text-lg">
                    ${coin.price.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-muted">Price (Toman)</span>

                  <span className="font-bold">
                    {coin.price_toman.toString().toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-muted">Market Cap</span>

                  <span className="font-medium">
                    {coin.market_cap.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-muted">Date</span>

                  <span>{coin.date}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-text-muted">Time</span>

                  <span>{coin.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-10">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            className="px-4 py-2 bg-surface rounded"
          >
            Prev
          </button>

          <span className="px-4 py-2">
            {page} / {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            className="px-4 py-2 bg-surface rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

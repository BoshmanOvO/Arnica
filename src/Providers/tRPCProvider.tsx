"use client";
import React, { PropsWithChildren, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { tRPC } from "@/app/_trpc/client";
import { httpBatchLink } from "@trpc/client";

const TRPCProvider = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(() => new QueryClient());
  const [tRPCClient] = useState(() => {
    tRPC.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    });
  });

  return (
    <tRPC.Provider client={tRPCClient!} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </tRPC.Provider>
  );
};

export default TRPCProvider;

"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export const Provider = ({ children }) => {
  return (
    <QueryClientProvider client={QueryClient}>{children}</QueryClientProvider>
  );
};

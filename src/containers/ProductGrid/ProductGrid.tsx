"use client";

import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/ProductCard";
import { getProducts, Product } from "@/service/fakerAPI";
import { ProductCardSkeleton } from "@/components/ProductCard/ProductCardSkeleton";

const PRIORITY_IMAGE_COUNT = 4;
const LOADING_SKELETON_COUNT = 16;
const PRODUCTS_QUERY_KEY = "products";

export const ProductGrid = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[]>({
    queryKey: [PRODUCTS_QUERY_KEY],
    queryFn: getProducts,
  });

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error: {error instanceof Error ? error.message : "Something went wrong"}
      </div>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {isLoading
        ? Array.from({ length: LOADING_SKELETON_COUNT }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))
        : products?.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              priority={index < PRIORITY_IMAGE_COUNT}
            />
          ))}
    </div>
  );
};

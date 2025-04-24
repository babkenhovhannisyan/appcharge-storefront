import { ProductGrid } from "@/containers/ProductGrid";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-12">
      <div className="w-full max-w-7xl">
        <ProductGrid />
      </div>
    </main>
  );
}

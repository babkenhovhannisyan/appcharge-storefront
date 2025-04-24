import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/service/fakerAPI';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/UI/Card';
import { PRODUCT_IMAGE } from '@/constants';
import { cn } from '@/utils/cn/cn';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="block w-full">
      <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
        <CardHeader className="p-0">
          <div className={cn(
            PRODUCT_IMAGE.CARD.aspectRatio,
            "relative w-full overflow-hidden"
          )}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              priority={priority}
              className={cn(
                "object-contain object-center",
                "group-hover:opacity-75",
                "transition-opacity duration-300"
              )}
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
            {product.title}
          </h3>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <p className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
} 
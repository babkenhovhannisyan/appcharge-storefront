import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getProduct, getProducts, Product } from '@/service/fakerAPI';
import { Button } from '@/components/UI/Button';
import { StarRating } from '@/components/StarRating';
import { FALLBACK_METADATA } from '@/constants';
import { parseId } from '@/utils/parseId';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  try {
    const { id: paramId } = await params;
    const id = parseId(paramId);

    if (!id) return FALLBACK_METADATA;

    const product: Product = await getProduct(id);
    const { title, description, image } = product;
    
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: image,
            width: 800,
            height: 600,
            alt: title,
          },
        ],
      },
    };
  } catch {
    return FALLBACK_METADATA;
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { id: paramId } = await params;
    const product: Product = await getProduct(parseInt(paramId, 10));
    if(!product) notFound();

    const { title, description, image, price, category, rating: { rate, count } } = product;

    return (
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-8">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline">Back to Products</Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mt-7">{title}</h1>
          </div>
          
          <div className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                priority
                className="h-full w-full object-cover object-center"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">${price}</h2>
                <p className="mt-2 text-sm text-gray-500">Category: {category}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900">Description</h3>
                <p className="mt-2 text-gray-600">{description}</p>
              </div>
              
              <StarRating rate={rate} count={count} />
            </div>
          </div>
        </div>
      </main>
    );
} 
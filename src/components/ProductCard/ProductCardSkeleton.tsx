import { Skeleton } from "@/components/UI/Skeleton";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/UI/Card";
import { PRODUCT_IMAGE } from "@/constants";

export const ProductCardSkeleton = () => {
  return (
    <Card className="h-full overflow-hidden">
      <CardHeader className="p-0">
        <div className={`${PRODUCT_IMAGE.CARD.aspectRatio} relative w-full`}>
          <Skeleton className="absolute inset-0 h-full w-full" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Skeleton className="mb-2 h-5 w-full" />
        <Skeleton className="h-5 w-3/5" />
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Skeleton className="h-6 w-1/4" />
      </CardFooter>
    </Card>
  );
};

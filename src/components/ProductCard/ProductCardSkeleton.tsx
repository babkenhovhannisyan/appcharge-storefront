// import { Skeleton } from "@/components/UI/Skeleton";

// export const ProductCardSkeleton = () => {
//   return (
//     <div className="flex flex-col space-y-3">
//       <Skeleton className="h-[125px] w-[250px] rounded-xl" />
//       <div className="space-y-2">
//         <Skeleton className="h-4 w-[250px]" />
//         <Skeleton className="h-4 w-[200px]" />
//       </div>
//     </div>
//   )
// }


import { Skeleton } from "@/components/UI/Skeleton";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/UI/Card";
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
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-3/5" />
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Skeleton className="h-6 w-1/4" />
      </CardFooter>
    </Card>
  );
};

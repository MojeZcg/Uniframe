import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsSkeleton({
  timesSkeleton,
}: Readonly<{ timesSkeleton: number }>) {
  return Array.from({ length: timesSkeleton }, (_, i) => (
    <div
      key={i}
      className="flex flex-col space-y-3 rounded-md bg-neutral-700 p-2 "
    >
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  ));
}

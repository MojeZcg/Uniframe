import { Skeleton } from "@/components/ui/skeleton";

export default function ProductsSkeleton({
  timesSkeleton,
}: Readonly<{ timesSkeleton: number }>) {
  return Array.from({ length: timesSkeleton }, (_, i) => (
    <div
      key={i}
      className="flex h-[29rem] w-[20rem] flex-col items-center justify-center space-y-3 rounded-xl border border-neutral-600 bg-neutral-950 p-2 "
    >
      <Skeleton className="my-2 h-64 w-52 rounded-xl" />
      <div className="space-y-3 ">
        <div className="space-y-3">
          <Skeleton className="h-6 w-72" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-72" />
            <Skeleton className="h-3 w-[200px]" />
          </div>
          <Skeleton className="h-7 w-28" />
        </div>
        <Skeleton className=" h-10 w-72 rounded-md" />
      </div>
    </div>
  ));
}

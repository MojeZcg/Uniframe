import { Skeleton } from "@nextui-org/react";

export default function ProductsSkeleton({
  timesSkeleton,
}: Readonly<{ timesSkeleton: number }>) {
  return Array.from({ length: timesSkeleton }, (_, i) => (
    <div
      key={i}
      className=" flex  w-[18.5rem] max-w-[18.5rem]  flex-col items-center gap-3 rounded-xl border border-white bg-neutral-900 px-2 py-6"
    >
      <div className="">
        <Skeleton className=" my-1 h-[16rem] w-[11rem] bg-neutral-950 " />
      </div>
      <div className="mr-10 flex w-full flex-col gap-2">
        <Skeleton className=" h-6 rounded-lg bg-neutral-950" />
        <div className="flex w-full flex-col gap-0.5">
          <Skeleton className="h-3 w-4/5 rounded-lg bg-neutral-950" />
          <Skeleton className="h-3 w-4/5 rounded-lg bg-neutral-950" />
        </div>
        <div className=" flex flex-col ">
          <Skeleton className="h-8 rounded-lg bg-neutral-950" />
        </div>
      </div>
    </div>
  ));
}

import { Skeleton } from "@nextui-org/react";

export default function TopProducts() {
  return (
    <div className="h-[30rem] w-[19rem] space-y-5 rounded-xl border border-white bg-neutral-950 px-4 py-6">
      <Skeleton className="rounded-lg bg-neutral-950">
        <div className=" h-64 rounded-lg"></div>
      </Skeleton>
      <div className=" space-y-4">
        <Skeleton className="w-full rounded-lg bg-neutral-950">
          <div className="h-6 w-full rounded-lg "></div>
        </Skeleton>
        <div className=" space-y-3">
          <div className="space-y-1">
            <Skeleton className="w-full rounded-lg bg-neutral-950">
              <div className="h-3 w-full rounded-lg "></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg bg-neutral-950">
              <div className="h-3 w-4/5 rounded-lg"></div>
            </Skeleton>
          </div>
          <div className="space-y-4">
            <Skeleton className="w-3/5 rounded-lg bg-neutral-950">
              <div className="h-7 w-3/5 rounded-lg "></div>
            </Skeleton>
            <Skeleton className="w-full rounded-lg bg-neutral-950">
              <div className="h-9 w-full rounded-lg "></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
}

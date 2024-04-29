import { Card, Skeleton } from "@nextui-org/react";

export default function ProductsSkeleton({
  timesSkeleton,
}: Readonly<{ timesSkeleton: number }>) {
  return (
    <div className={`flex w-full flex-wrap items-center justify-center gap-6`}>
      {Array.from({ length: timesSkeleton }, (_, i) => (
        <Card
          key={i}
          radius="lg"
          className=" h-[32rem] w-[20.5rem] space-y-4 bg-neutral-900 py-4 md:h-[28rem] md:w-[19rem]"
        >
          <Skeleton
            classNames={{
              base: "bg-neutral-700",
            }}
            className="mx-10 rounded-lg"
          >
            <div className=" h-64 rounded-lg bg-default-700"></div>
          </Skeleton>
          <Skeleton
            classNames={{
              base: "bg-neutral-700",
            }}
            className="mx-2 rounded-lg"
          >
            <div className=" h-10  rounded-lg"></div>
          </Skeleton>
          <div className="space-y-2">
            <div className="space-y-1">
              <Skeleton
                classNames={{
                  base: "bg-neutral-700",
                }}
                className="mx-2 rounded-lg"
              >
                <div className=" h-4 rounded-lg"></div>
              </Skeleton>
              <Skeleton
                classNames={{
                  base: "bg-neutral-700",
                }}
                className="mx-2 rounded-lg"
              >
                <div className=" h-4 rounded-lg"></div>
              </Skeleton>
            </div>
            <Skeleton
              classNames={{
                base: "bg-neutral-700",
              }}
              className="mx-2 mr-52 rounded-lg"
            >
              <div className="  h-8 w-20 rounded-lg"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
}

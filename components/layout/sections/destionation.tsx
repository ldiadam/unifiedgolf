import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface LocationProps {
  imageUrl: string;
  name: string;
}

export const metadata = {
  title: "Destination",
  description: "",
};

export const DestionationSection = () => {
  const locationList: LocationProps[] = [
    {
      imageUrl: "/loc-1.jpg",
      name: "Phuket",
    },
    {
      imageUrl: "/loc-2.jpg",
      name: "Bangkok",
    },
    {
      imageUrl: "/loc-3.jpg",
      name: "Hua Hin",
    },
    {
      imageUrl: "/loc-4.jpg",
      name: "Pattaya",
    },
    {
      imageUrl: "/loc-5.jpg",
      name: "Bali",
    },
    {
      imageUrl: "/loc-6.jpg",
      name: "Dubai",
    },
  ];

  return (
    <section id="destination" className="container lg:w-[75%] py-16 sm:py-24">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Destination
        </h2>

        <h2 className="text-xl md:text-xl text-center font-bold">
          Our Top Destination
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {locationList.map(({ imageUrl, name }, index) => (
          <Card
            key={index}
            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg relative"
          >
            <Button
              variant={"link"}
              className="m-0 flex size-full p-0 ring-inset"
              asChild
            >
              <Link
                href={{
                  pathname: "/locations",
                  // query: {
                  //   [SearchParams.BODY_STYLE]: slug,
                  // },
                }}
                className="absolute inset-0 z-20 size-full rounded-xl"
              />
            </Button>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
              <div className="text-center">
                <h2 className="text-3xl text-white font-bold">{name}</h2>
              </div>
            </div>
            <CardContent className="p-0 gap-0">
              <div className="h-full overflow-hidden">
                <Image
                  src={imageUrl}
                  alt={`${name}`}
                  width={100}
                  height={100}
                  className="z-0 w-full aspect-square object-cover opacity-70 transition-all duration-200 ease-linear size-full group-hover/hoverimg:opacity-100 group-hover/hoverimg:scale-[1.01]"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

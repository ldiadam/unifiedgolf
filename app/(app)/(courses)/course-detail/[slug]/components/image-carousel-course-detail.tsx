import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Info, MapPin } from "lucide-react";

interface ImageProps {
  url: string;
  alt: string;
}

interface CourseInfo {
  name: string;
  country: string;
  city: string;
  description: {
    credential: { text: string }[];
    theCourse: { text: string }[];
    accomodation: { text: string }[];
    address: { text: string }[];
    contact: { text: string }[];
    courseFee: { text: string }[];
    otherInfo: { text: string }[];
  };
  type: string;
}

export default function ImageCarousel({
  images,
  courseInfo,
}: {
  images: ImageProps[];
  courseInfo: CourseInfo;
}) {
  if (!images || images.length === 0) {
    return (
      <div className="relative h-64 md:h-96 w-full mb-6 rounded-lg overflow-hidden bg-gray-200">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          No images available
        </div>
      </div>
    );
  }

  // Get first item from each description section for the overlay
  const courseHighlight = courseInfo.description.theCourse || "";
  const accommodationHighlight = courseInfo.description.accomodation || "";
  const credetialHighlight = courseInfo.description.accomodation || "";
  const addressHighlight = courseInfo.description.address || "";
  const contactHighlight = courseInfo.description.contact || "";
  const courseFeeHighlight = courseInfo.description.courseFee || "";
  const otherInfoHighlight = courseInfo.description.otherInfo || "";
  return (
    <Carousel className="relative h-full md:h-[1024px] w-full mb-6">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="relative h-full md:h-[1024px] w-full overflow-hidden rounded-lg group">
              <Image
                src={image.url ? image.url : "/no-image.jpg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                priority={index === 0}
                quality={100}
              />

              {/* Image overlay with course details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6 text-white">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-700 text-white">
                      <span className="text-sm font-bold">
                        {courseInfo.type || "Golf Course"}
                      </span>
                    </Badge>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold">
                    {courseInfo.name}
                  </h2>

                  <div className="flex items-center text-sm md:text-base">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                      {courseInfo.city}, {courseInfo.country}
                    </span>
                  </div>

                  <div className="hidden md:block space-y-2 mt-2">
                    {credetialHighlight && (
                      <div className="flex flex-col items-start gap-2">
                        <Badge className="bg-primary/70 text-white">
                          <div className="flex flex-row gap-2">
                            <Info className="h-4 w-4  mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-bold line-clamp-2">
                              Credential
                            </span>
                          </div>
                        </Badge>

                        <ul className="space-y-1 list-disc ml-8">
                          {credetialHighlight.map(
                            (desc, index) =>
                              desc.text && (
                                <li key={index}>
                                  <span className="text-xs">{desc.text}</span>
                                </li>
                              )
                          )}{" "}
                        </ul>
                      </div>
                    )}
                    {courseHighlight && (
                      <div className="flex flex-col items-start gap-2">
                        <Badge className="bg-primary/70 text-white">
                          <div className="flex flex-row gap-2">
                            <Info className="h-4 w-4  mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-bold line-clamp-2">
                              The Course
                            </span>
                          </div>
                        </Badge>
                        <ul className="space-y-1 list-disc ml-8">
                          {courseHighlight.map(
                            (desc, index) =>
                              desc.text && (
                                <li key={index}>
                                  <span className="text-xs">{desc.text}</span>
                                </li>
                              )
                          )}{" "}
                        </ul>
                      </div>
                    )}
                    {accommodationHighlight && (
                      <div className="flex flex-col items-start gap-2">
                        <Badge className="bg-primary/70 text-white">
                          <div className="flex flex-row gap-2">
                            <Info className="h-4 w-4  mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-bold line-clamp-2">
                              Accomodation
                            </span>
                          </div>
                        </Badge>
                        <ul className="space-y-1 list-disc ml-8">
                          {accommodationHighlight.map(
                            (desc, index) =>
                              desc.text && (
                                <li key={index}>
                                  <span className="text-xs">{desc.text}</span>
                                </li>
                              )
                          )}{" "}
                        </ul>
                      </div>
                    )}
                    {addressHighlight && (
                      <div className="flex flex-col items-start gap-2">
                        <Badge className="bg-primary/70 text-white">
                          <div className="flex flex-row gap-2">
                            <Info className="h-4 w-4  mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-bold line-clamp-2">
                              Address / Location
                            </span>
                          </div>
                        </Badge>
                        <ul className="space-y-1 list-disc ml-8">
                          {addressHighlight.map(
                            (desc, index) =>
                              desc.text && (
                                <li key={index}>
                                  <span className="text-xs">{desc.text}</span>
                                </li>
                              )
                          )}{" "}
                        </ul>
                      </div>
                    )}
                    {contactHighlight && (
                      <div className="flex flex-col items-start gap-2">
                        <Badge className="bg-primary/70 text-white">
                          <div className="flex flex-row gap-2">
                            <Info className="h-4 w-4  mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-bold line-clamp-2">
                              Contact
                            </span>
                          </div>
                        </Badge>
                        <ul className="space-y-1 list-disc ml-8">
                          {contactHighlight.map(
                            (desc, index) =>
                              desc.text && (
                                <li key={index}>
                                  <span className="text-xs">{desc.text}</span>
                                </li>
                              )
                          )}{" "}
                        </ul>
                      </div>
                    )}
                    {courseFeeHighlight && (
                      <div className="flex flex-col items-start gap-2">
                        <Badge className="bg-primary/70 text-white">
                          <div className="flex flex-row gap-2">
                            <Info className="h-4 w-4  mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-bold line-clamp-2">
                              Course Fee
                            </span>
                          </div>
                        </Badge>
                        <ul className="space-y-1 list-disc ml-8">
                          {courseFeeHighlight.map(
                            (desc, index) =>
                              desc.text && (
                                <li key={index}>
                                  <span className="text-xs">{desc.text}</span>
                                </li>
                              )
                          )}{" "}
                        </ul>
                      </div>
                    )}
                    {otherInfoHighlight && (
                      <div className="flex flex-col items-start gap-2">
                        <Badge className="bg-primary/70 text-white">
                          <div className="flex flex-row gap-2">
                            <Info className="h-4 w-4  mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-bold line-clamp-2">
                              Other Information
                            </span>
                          </div>
                        </Badge>
                        <ul className="space-y-1 list-disc ml-8">
                          {otherInfoHighlight.map(
                            (desc, index) =>
                              desc.text && (
                                <li key={index}>
                                  <span className="text-xs">{desc.text}</span>
                                </li>
                              )
                          )}{" "}
                        </ul>
                      </div>
                    )}

                    {/* {accommodationHighlight && (
                      <div className="flex items-start gap-2">
                        <Info className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <p className="text-sm line-clamp-2">
                          <span className="font-semibold">Accommodation:</span>{" "}
                          {accommodationHighlight}
                        </p>
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
}

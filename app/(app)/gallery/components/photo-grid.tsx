"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Photo } from "@/types/photo";
import { Badge } from "@/components/ui/badge";
import { PhotoModal } from "./photo-modal";

interface PhotoGridProps {
  photos: Photo[];
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <p className="text-muted-foreground">Belum ada foto yang diunggah.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo) => (
          <Card key={photo.id} className="overflow-hidden h-full flex flex-col">
            <div
              className="relative h-48 cursor-pointer"
              onClick={() => setSelectedPhoto(photo)}
            >
              <Image
                src={photo.url}
                alt={photo.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-sm font-medium line-clamp-1">
                {photo.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0 pb-2 flex-grow">
              <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                {photo.description}
              </p>
              <p className="text-xs mb-2">Lokasi: {photo.location}</p>
              <div className="flex flex-wrap gap-1">
                {photo.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-xs px-1 py-0"
                  >
                    {tag}
                  </Badge>
                ))}
                {photo.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs px-1 py-0">
                    +{photo.tags.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between items-center">
              <span className="text-xs text-muted-foreground">
                {new Date(photo.uploadedAt).toLocaleDateString()}
              </span>
              <Button variant="ghost" size="sm" className="h-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                {photo.likes}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedPhoto && (
        <PhotoModal
          photo={selectedPhoto}
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
        />
      )}
    </>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PhotoGrid } from "./components/photo-grid";
import { PhotoFilterComponent } from "./components/photo-filter";
import { Photo, PhotoFilter } from "@/types/photo";

// Data contoh foto untuk simulasi
const DUMMY_PHOTOS: Photo[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa",
    title: "Lapangan Golf Hijau yang Indah",
    description:
      "Pemandangan lapangan golf yang indah di pagi hari dengan embun yang masih segar.",
    location: "Sawangan Golf, Jakarta",
    category: "lapangan-golf",
    tags: ["golf", "lapangan", "pagi", "embun"],
    uploadedBy: "GolfEnthusiast",
    uploadedAt: "2023-05-15T08:30:00Z",
    likes: 42,
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b",
    title: "Turnamen Tahunan 2023",
    description:
      "Momen seru dari turnamen golf tahunan yang diselenggarakan di Jakarta Golf Club.",
    location: "Jakarta Golf Club",
    category: "turnamen",
    tags: ["turnamen", "kompetisi", "jakarta"],
    uploadedBy: "GolfPro",
    uploadedAt: "2023-06-22T14:15:00Z",
    likes: 30,
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1558365849-6ebd8b0454b2",
    title: "Workshop Golf untuk Pemula",
    description:
      "Acara komunitas golf yang membahas teknik dasar untuk pemula.",
    location: "Pondok Indah Golf Club",
    category: "acara-komunitas",
    tags: ["workshop", "pemula", "belajar", "komunitas"],
    uploadedBy: "GolfTeacher",
    uploadedAt: "2023-07-10T10:00:00Z",
    likes: 23,
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1592919505780-303950717480",
    title: "Sunset di Putting Green",
    description: "Momen indah saat matahari terbenam di area putting green.",
    location: "Royale Jakarta Golf Club",
    category: "lapangan-golf",
    tags: ["sunset", "putting", "sore", "pemandangan"],
    uploadedBy: "GolfPhotographer",
    uploadedAt: "2023-08-05T17:45:00Z",
    likes: 56,
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1595429035839-c99c298ffdde",
    title: "Club House Modern",
    description: "Arsitektur modern club house yang baru direnovasi.",
    location: "Damai Indah Golf",
    category: "lainnya",
    tags: ["clubhouse", "arsitektur", "modern", "fasilitas"],
    uploadedBy: "ArchitectFan",
    uploadedAt: "2023-09-12T12:30:00Z",
    likes: 18,
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1580201092675-a0a6a6cafbb1",
    title: "Kelas Golf untuk Anak-anak",
    description: "Program pelatihan golf untuk anak-anak usia 8-12 tahun.",
    location: "BSD Golf Club",
    category: "acara-komunitas",
    tags: ["anak", "pelatihan", "junior", "belajar"],
    uploadedBy: "JuniorCoach",
    uploadedAt: "2023-10-20T09:15:00Z",
    likes: 34,
  },
];

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi pengambilan data dari API
    const fetchPhotos = async () => {
      try {
        // Dalam implementasi nyata, ini akan menjadi panggilan API
        await new Promise((resolve) => setTimeout(resolve, 800));
        setPhotos(DUMMY_PHOTOS);
        setFilteredPhotos(DUMMY_PHOTOS);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  const handleFilterChange = (filter: PhotoFilter) => {
    let filtered = [...photos];

    if (filter.category) {
      filtered = filtered.filter((photo) => photo.category === filter.category);
    }

    if (filter.searchTerm) {
      const searchLower = filter.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (photo) =>
          photo.title.toLowerCase().includes(searchLower) ||
          photo.description.toLowerCase().includes(searchLower) ||
          photo.location.toLowerCase().includes(searchLower) ||
          photo.tags.some((tag) => tag.toLowerCase().includes(searchLower))
      );
    }

    setFilteredPhotos(filtered);
  };

  return (
    <div className="container pt-44 py-4 max-w-7xl">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Galeri Foto</h1>
          <p className="text-muted-foreground">
            Jelajahi foto-foto lapangan golf, turnamen, dan acara komunitas.
          </p>
        </div>
        <Button asChild>
          <Link href="/gallery/upload">Unggah Foto</Link>
        </Button>
      </div>

      <PhotoFilterComponent onFilterChange={handleFilterChange} />

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-500"></div>
        </div>
      ) : (
        <PhotoGrid photos={filteredPhotos} />
      )}
    </div>
  );
}

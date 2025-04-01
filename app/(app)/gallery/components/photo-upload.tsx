"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Photo } from "@/types/photo";
import Image from "next/image";

export function PhotoUpload() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [photoData, setPhotoData] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
    tags: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPhotoData({ ...photoData, [name]: value });
  };

  const handleCategoryChange = (value: string) => {
    setPhotoData({ ...photoData, category: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);

      // Membuat preview
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Silakan pilih foto untuk diunggah");
      return;
    }

    if (!photoData.title || !photoData.description || !photoData.category) {
      alert("Silakan isi semua field yang diperlukan");
      return;
    }

    setIsUploading(true);

    try {
      // Simulasi upload (Ganti dengan kode upload sebenarnya)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulasi response API
      const newPhoto: Photo = {
        id: `photo-${Date.now()}`,
        url: imagePreview!,
        title: photoData.title,
        description: photoData.description,
        location: photoData.location,
        category: photoData.category as any,
        tags: photoData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
        uploadedBy: "Pengguna", // Idealnya dari session
        uploadedAt: new Date().toISOString(),
        likes: 0,
      };

      console.log("Foto baru:", newPhoto);
      // Dalam implementasi nyata, Anda akan menggunakan API untuk menyimpan data

      router.push("/gallery"); // Redirect ke halaman galeri
    } catch (error) {
      console.error("Error uploading photo:", error);
      alert("Gagal mengunggah foto. Silakan coba lagi.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Unggah Foto</CardTitle>
        <CardDescription>
          Bagikan momen-momen spesial di lapangan golf dengan komunitas.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image">Foto</Label>
            <div className="flex flex-col items-center justify-center border border-dashed rounded-md p-4 h-60">
              {imagePreview ? (
                <div className="relative w-full h-full">
                  <Image
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() => {
                      setImageFile(null);
                      setImagePreview(null);
                    }}
                  >
                    Hapus
                  </Button>
                </div>
              ) : (
                <>
                  <svg
                    className="h-10 w-10 text-muted-foreground mb-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
                    <rect x="16" y="2" width="6" height="6" rx="1"></rect>
                    <circle cx="9" cy="9" r="2"></circle>
                    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                  </svg>
                  <p className="text-sm text-muted-foreground mb-2">
                    Seret dan letakkan foto di sini, atau klik untuk memilih
                  </p>
                  <Button type="button" variant="outline" size="sm" asChild>
                    <label>
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                      Pilih Foto
                    </label>
                  </Button>
                </>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Judul Foto</Label>
            <Input
              id="title"
              name="title"
              value={photoData.title}
              onChange={handleInputChange}
              placeholder="Masukkan judul foto"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Deskripsi</Label>
            <Textarea
              id="description"
              name="description"
              value={photoData.description}
              onChange={handleInputChange}
              placeholder="Ceritakan tentang foto ini..."
              rows={3}
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Lokasi</Label>
              <Input
                id="location"
                name="location"
                value={photoData.location}
                onChange={handleInputChange}
                placeholder="Lokasi foto diambil"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Kategori</Label>
              <Select
                value={photoData.category}
                onValueChange={handleCategoryChange}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Pilih kategori" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lapangan-golf">Lapangan Golf</SelectItem>
                  <SelectItem value="turnamen">Turnamen</SelectItem>
                  <SelectItem value="acara-komunitas">
                    Acara Komunitas
                  </SelectItem>
                  <SelectItem value="lainnya">Lainnya</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tag (dipisahkan koma)</Label>
            <Input
              id="tags"
              name="tags"
              value={photoData.tags}
              onChange={handleInputChange}
              placeholder="golf, turnamen, sunset, dll"
            />
            <p className="text-xs text-muted-foreground">
              Pisahkan tag dengan koma, contoh: golf, turnamen, sunset
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isUploading} className="w-full">
            {isUploading ? "Sedang Mengunggah..." : "Unggah Foto"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}

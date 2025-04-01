import { PhotoUpload } from "../components/photo-upload";

export default function UploadPhotoPage() {
  return (
    <div className="container py-6 max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Unggah Foto</h1>
        <p className="text-muted-foreground">
          Bagikan foto-foto terbaik Anda dengan komunitas golf.
        </p>
      </div>

      <PhotoUpload />
    </div>
  );
}

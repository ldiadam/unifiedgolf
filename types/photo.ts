export interface Photo {
  id: string;
  url: string;
  title: string;
  description: string;
  location: string;
  category: "lapangan-golf" | "turnamen" | "acara-komunitas" | "lainnya";
  tags: string[];
  uploadedBy: string;
  uploadedAt: string;
  likes: number;
}

export interface Comment {
  id: string;
  photoId: string;
  userName: string;
  content: string;
  createdAt: string;
}

export interface PhotoFilter {
  category?: string;
  searchTerm?: string;
  tags?: string[];
}

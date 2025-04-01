"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Comment, Photo } from "@/types/photo";
import { Separator } from "@/components/ui/separator";

interface PhotoModalProps {
  photo: Photo;
  isOpen: boolean;
  onClose: () => void;
}

export function PhotoModal({ photo, isOpen, onClose }: PhotoModalProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: `comment-${Date.now()}`,
      photoId: photo.id,
      userName: "Pengguna", // Idealnya menggunakan username dari session
      content: newComment,
      createdAt: new Date().toISOString(),
    };

    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-[90vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{photo.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-[50vh] md:h-[60vh]">
            <Image
              src={photo.url}
              alt={photo.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <div className="mb-4">
              <h3 className="text-lg font-medium">Detail</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {photo.description}
              </p>
              <p className="text-sm mt-2">Lokasi: {photo.location}</p>
              <p className="text-sm mt-2">
                Kategori: {photo.category.replace("-", " ")}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {photo.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Button variant="outline" size="sm" className="h-8">
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
                  Suka ({photo.likes})
                </Button>
                <p className="text-xs text-muted-foreground">
                  Diunggah oleh {photo.uploadedBy} pada{" "}
                  {new Date(photo.uploadedAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <Separator className="my-4" />

            <div className="flex-grow">
              <h3 className="text-lg font-medium mb-4">Komentar</h3>
              <div className="space-y-4 mb-4 max-h-[30vh] overflow-y-auto">
                {comments.length === 0 ? (
                  <p className="text-sm text-muted-foreground">
                    Belum ada komentar.
                  </p>
                ) : (
                  comments.map((comment) => (
                    <div key={comment.id} className="flex gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>
                          {comment.userName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium">
                            {comment.userName}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {new Date(comment.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                        <p className="text-sm">{comment.content}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="flex gap-2">
                <Textarea
                  placeholder="Tambahkan komentar..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[80px]"
                />
                <Button onClick={handleAddComment} className="self-end">
                  Kirim
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

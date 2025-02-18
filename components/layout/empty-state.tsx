import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

interface EmptyStateProps {
  message: string;
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <Card className="w-full py-8">
      <CardContent className="flex flex-col items-center justify-center text-center">
        <div className="rounded-full bg-muted p-3 mb-4">
          <MapPin className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-muted-foreground">{message}</p>
      </CardContent>
    </Card>
  );
}

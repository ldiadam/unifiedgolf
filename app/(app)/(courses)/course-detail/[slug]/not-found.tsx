// app/courses/[slug]/not-found.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="container mx-auto py-16 px-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Course Location Not Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The course location you&apos;re looking for doesn&apos;t exist or
            has been moved.
          </p>
          <Link href="/courses">
            <Button>Return to Course Locations</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

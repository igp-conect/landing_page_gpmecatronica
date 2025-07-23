"use client";

import { Users } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export type ResearchProjectCardProps = {
  title: string;
  leaders: string[];
  tags: string[];
  shortDescription: string;
  image: {
    src: string;
    alt: string;
  };
};

export function ResearchProjectCard({
  title,
  leaders,
  tags,
  shortDescription,
  image,
}: ResearchProjectCardProps) {
  return (
    <Card className="w-full mx-auto">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-[300px] flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full h-[200px]"
            />
          </div>
          <div className="flex-1 min-w-0 space-y-3">
            <h3 className="text-xl font-semibold leading-tight mb-1 break-words">
              {title}
            </h3>

            <div className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
              <Users className="w-4 h-4" />
              <span className="break-words">{leaders.join(", ")}</span>
            </div>

            <div className="flex flex-wrap gap-1">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="text-xs whitespace-nowrap"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {shortDescription}
        </p>
      </CardContent>
    </Card>
  );
}

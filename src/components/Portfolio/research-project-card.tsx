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
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              className="rounded-lg object-cover w-full md:w-[300px] h-[200px]"
            />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="text-xl font-semibold leading-tight mb-2">
                {title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2"></div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                <Users className="w-4 h-4" />
                <span>{leaders.join(", ")}</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {shortDescription}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

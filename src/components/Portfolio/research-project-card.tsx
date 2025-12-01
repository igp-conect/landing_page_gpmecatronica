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
    <Card className="tw:w-full tw:mx-auto">
      <CardHeader>
        <div className="tw:flex tw:flex-col tw:sm:flex-row tw:gap-4">
          <div className="tw:hidden tw:sm:flex tw:sm:w-48 tw:sm:h-48 tw:flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={192}
              height={192}
              className="tw:rounded-sm tw:object-cover tw:w-full tw:h-full"
            />
          </div>
          <div className="tw:flex-1 tw:min-w-0 tw:space-y-2">
            <h3 className="tw:text-xl tw:font-semibold tw:leading-tight tw:mb-1 tw:break-words">
              {title}
            </h3>

            <div className="tw:flex tw:items-center tw:gap-1 tw:text-sm tw:text-muted-foreground tw:flex-wrap">
              <Users className="tw:w-4 tw:h-4" />
              <span className="tw:break-words">{leaders.join(", ")}</span>
            </div>

            <div className="tw:flex tw:flex-wrap tw:gap-1">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="tw:text-xs tw:whitespace-nowrap"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="tw:pt-0">
        <p className="tw:text-sm tw:leading-relaxed tw:text-muted-foreground">
          {shortDescription}
        </p>
      </CardContent>
    </Card>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { CareerTimelineItem } from "@/config/timeline";

interface TimelineProps {
  items: CareerTimelineItem[];
  showDescriptionList?: boolean;
}

export function Timeline({ items, showDescriptionList }: TimelineProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>
              {item.company ? `${item.title} - ${item.company}` : item.title}
            </CardTitle>
            <CardDescription>{item.date}</CardDescription>
            {item.subTitle && (
              <CardDescription>{item.subTitle}</CardDescription>
            )}
          </CardHeader>
          <CardContent className="space-y-4">
            {showDescriptionList && item.descriptionList && (
              <ul className="list-disc list-inside pl-5 text-gray-400">
                {item.descriptionList.map((listItem, listIndex) => (
                  <li key={listIndex}>{listItem}</li>
                ))}
              </ul>
            )}
            {item.technologies && (
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} color="gray" variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

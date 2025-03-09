import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  title: string;
  description: string;
  date: string;
  link: string;
}

export function BlogCard({ title, description, date, link }: CardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={link}>{title}</Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <time dateTime={date} className="text-sm text-gray-500">
            {new Date(date).toLocaleDateString()}
          </time>

          <Button asChild variant="outline">
            <Link href={link}>
              Read More
              <HiOutlineArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

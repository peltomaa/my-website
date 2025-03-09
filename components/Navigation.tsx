import { LINKEDIN_LINK, GITHUB_LINK } from "../config/links";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/config/icons";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export function Navigation() {
  return (
    <div className="border-b border-gray-900 bg-gray-950 text-gray-400 relative z-10">
      <div className="container mx-auto max-w-7xl p-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className={cn(
              "text-white font-semibold text-xl rounded hover:bg-gray-800 transition-colors",
            )}
          >
            Touko Peltomaa
          </Link>

          <Button asChild variant="ghost">
            <Link href="/blog/page/0">Blog</Link>
          </Button>

          <Button asChild variant="ghost">
            <Link href="/resume">Resume</Link>
          </Button>

          <div className="flex flex-1 justify-end gap-4">
            <Button asChild variant="ghost" size="icon">
              <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">
                <GithubIcon />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

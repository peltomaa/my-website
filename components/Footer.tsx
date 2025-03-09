import { GITHUB_LINK, LINKEDIN_LINK } from "../config/links";
import Link from "next/link";
import { Button } from "./ui/button";
import { GithubIcon, LinkedinIcon } from "@/config/icons";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-900">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
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
          <div className="flex flex-row gap-8">
            <Button asChild variant="ghost">
              <Link href="/blog/page/0">Blog</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link href="/resume">Resume</Link>
            </Button>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Touko Peltomaa
          </p>
        </div>
      </div>
    </footer>
  );
}

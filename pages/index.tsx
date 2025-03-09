import { LINKEDIN_LINK } from "../config/links";
import { CAREER_TIMELINE } from "../config/timeline";
import { BlogCard } from "../components/BlogCard";
import { AnimateInBlock } from "../components/AnimateInBlock";
import { SectionHeader } from "../components/SectionHeader";
import Link from "next/link";
import Head from "next/head";
import { getBlogPosts, BlogPost } from "@/utils/markdown.server";
import { Timeline as CustomTimeline } from "../components/Timeline";
import { Button } from "@/components/ui/button";

const CAREER_TEASER = CAREER_TIMELINE.slice(0, 3);

interface PageProps {
  posts: BlogPost[];
}

const Page = ({ posts }: PageProps) => {
  return (
    <>
      <Head>
        <title>Touko Peltomaa - Home</title>
        <meta
          name="description"
          content="Software Developer crafting efficient and scalable solutions"
        />
      </Head>
      <AnimateInBlock order={1}>
        <div className="relative overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
          <div className="container mx-auto max-w-7xl px-4 py-20">
            <h1 className="text-6xl font-bold mb-4">Touko Peltomaa</h1>
            <h2 className="text-2xl text-gray-400 mb-8">
              Software Developer crafting efficient and scalable solutions
            </h2>
            <div className="flex gap-4">
              <Button asChild>
                <a
                  href={LINKEDIN_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </AnimateInBlock>

      <AnimateInBlock order={2}>
        <div className="container mx-auto max-w-7xl px-4 py-20 relative">
          <SectionHeader
            title="Resume"
            description="Here's a summary of my experience, showcasing key roles, projects,
            and the technologies I've mastered."
          />
          <CustomTimeline items={CAREER_TEASER} />
          <AnimateInBlock order={3}>
            <Button color="light" className="mt-4">
              <Link href="/resume">View Full Resume</Link>
            </Button>
          </AnimateInBlock>
        </div>
      </AnimateInBlock>

      <AnimateInBlock order={3}>
        <div className="container mx-auto max-w-7xl px-4 py-20">
          <SectionHeader
            title="Blog"
            description="My thoughts on software development, technology, and best practices."
          />
          <div className="grid grid-cols-1 gap-8">
            {posts.slice(0, 3).map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                description={post.description}
                date={post.date}
                link={`/blog/${post.slug}`}
              />
            ))}
          </div>
        </div>
      </AnimateInBlock>
    </>
  );
};

export async function getStaticProps() {
  const posts = await getBlogPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Page;

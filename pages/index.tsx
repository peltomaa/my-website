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
    <div className="space-y-10">
      <Head>
        <title>Touko Peltomaa - Home</title>
        <meta
          name="description"
          content="Software Developer crafting efficient and scalable solutions"
        />
      </Head>
      <AnimateInBlock order={1}>
        <h1 className="text-6xl font-bold mb-4">Touko Peltomaa</h1>
        <h2 className="text-2xl text-gray-400 mb-8">
          Software Developer crafting efficient and scalable solutions
        </h2>
        <div className="flex gap-4">
          <Button asChild>
            <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer">
              Contact Me
            </a>
          </Button>
        </div>
      </AnimateInBlock>

      <AnimateInBlock order={2}>
        <SectionHeader
          title="Resume"
          description="Here's a summary of my experience, showcasing key roles, projects,
            and the technologies I've mastered."
        />
      </AnimateInBlock>

      <AnimateInBlock order={3}>
        <CustomTimeline items={CAREER_TEASER} />
        <AnimateInBlock order={4}>
          <Button color="light" className="mt-4">
            <Link href="/resume">View Full Resume</Link>
          </Button>
        </AnimateInBlock>
      </AnimateInBlock>

      <AnimateInBlock order={4}>
        <SectionHeader
          title="Blog"
          description="My thoughts on software development, technology, and best practices."
        />
      </AnimateInBlock>

      <AnimateInBlock order={5}>
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
      </AnimateInBlock>
    </div>
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

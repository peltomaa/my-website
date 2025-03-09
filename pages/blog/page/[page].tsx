import { BlogPost, getBlogPosts } from "../../../utils/markdown.server";
import { BlogCard } from "../../../components/BlogCard";
import { AnimateInBlock } from "../../../components/AnimateInBlock";
import Head from "next/head";
import Link from "next/link";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "../../../components/ui/pagination";
import { SectionHeader } from "@/components/SectionHeader";

const POSTS_PER_PAGE = 5;

export async function getStaticProps({ params }: { params: { page: string } }) {
  const posts = await getBlogPosts();
  const page = parseInt(params.page, 10);
  const start = page * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(start, end);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  if (page < 0 || page >= totalPages) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: paginatedPosts,
      totalPages,
      currentPage: page,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getBlogPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: i.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
}

const BlogPage = ({
  posts,
  totalPages,
  currentPage,
}: {
  posts: BlogPost[];
  totalPages: number;
  currentPage: number;
}) => {
  return (
    <div className="space-y-8">
      <Head>
        <title>Touko Peltomaa - Blog</title>
        <meta
          name="description"
          content="Software Developer crafting efficient and scalable solutions"
        />
      </Head>
      <AnimateInBlock order={1}>
        <SectionHeader
          title="Blog"
          description="My thoughts on software development, technology, and best practices."
        />
      </AnimateInBlock>
      <div className="space-y-4">
        {posts.map((post) => (
          <AnimateInBlock key={post.slug} order={posts.indexOf(post) + 1}>
            <BlogCard
              title={post.title}
              description={post.description}
              date={post.date}
              link={`/blog/${post.slug}`}
            />
          </AnimateInBlock>
        ))}
      </div>
      <AnimateInBlock order={posts.length + 2}>
        <Pagination>
          <PaginationContent>
            {currentPage > 0 && (
              <PaginationItem>
                <Link href={`/blog/page/${currentPage - 1}`} passHref>
                  <PaginationPrevious>Previous</PaginationPrevious>
                </Link>
              </PaginationItem>
            )}

            {currentPage > 1 && (
              <PaginationItem>
                <Link href={`/blog/page/0`} passHref>
                  <PaginationLink>0</PaginationLink>
                </Link>
              </PaginationItem>
            )}

            {currentPage > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {currentPage > 0 && (
              <PaginationItem>
                <Link href={`/blog/page/${currentPage - 1}`} passHref>
                  <PaginationLink>{currentPage - 1}</PaginationLink>
                </Link>
              </PaginationItem>
            )}

            <PaginationItem>
              <Link href={`/blog/page/${currentPage}`} passHref>
                <PaginationLink isActive>{currentPage}</PaginationLink>
              </Link>
            </PaginationItem>

            {currentPage < totalPages - 1 && (
              <PaginationItem>
                <Link href={`/blog/page/${currentPage + 1}`} passHref>
                  <PaginationLink>{currentPage + 1}</PaginationLink>
                </Link>
              </PaginationItem>
            )}

            {currentPage < totalPages - 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {currentPage < totalPages - 2 && (
              <PaginationItem>
                <Link href={`/blog/page/${totalPages - 1}`} passHref>
                  <PaginationLink>{totalPages - 1}</PaginationLink>
                </Link>
              </PaginationItem>
            )}

            {currentPage < totalPages - 1 && (
              <PaginationItem>
                <Link href={`/blog/page/${currentPage + 1}`} passHref>
                  <PaginationNext>Next</PaginationNext>
                </Link>
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </AnimateInBlock>
    </div>
  );
};

export default BlogPage;

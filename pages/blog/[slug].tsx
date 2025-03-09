import { AnimateInBlock } from "@/components/AnimateInBlock";
import { getBlogPost, getBlogPosts, BlogPost } from "@/utils/markdown.server";
import { GetStaticPaths, GetStaticProps } from "next";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import Head from "next/head";

interface BlogPostPageProps {
  post: BlogPost & { htmlContent: string };
  canonicalUrl: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  BlogPostPageProps,
  { slug: string }
> = async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    throw new Error("Slug is required");
  }

  const post = await getBlogPost(slug);

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  const marked = new Marked(
    markedHighlight({
      emptyLangClass: "",
      langPrefix: "language-",
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
    }),
  );

  const htmlContent = await marked.parse(post.content);
  const canonicalUrl = `https://toukopeltomaa.com/blog/${slug}`;

  return {
    props: {
      post: {
        ...post,
        htmlContent,
      },
      canonicalUrl,
    },
  };
};

const BlogPostPage = ({ post, canonicalUrl }: BlogPostPageProps) => {
  return (
    <>
      <Head>
        <title>{post.title} - Touko Peltomaa</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="article:published_time" content={post.date} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
      </Head>
      <div className="container mx-auto max-w-7xl px-4 py-20">
        <article className="max-w-none">
          <AnimateInBlock order={1}>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          </AnimateInBlock>
          <AnimateInBlock order={2}>
            <time dateTime={post.date} className="text-gray-500 block mb-8">
              {new Date(post.date).toLocaleDateString()}
            </time>
          </AnimateInBlock>
          <AnimateInBlock order={3}>
            <div
              className="prose lg:prose-xl prose-invert"
              dangerouslySetInnerHTML={{ __html: post.htmlContent }}
            />
          </AnimateInBlock>
        </article>
      </div>
    </>
  );
};

export default BlogPostPage;

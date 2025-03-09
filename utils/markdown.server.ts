import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";

async function getMarkdownFiles<T extends { date: string }>(
  directory: string,
  schema: z.ZodSchema<T>,
): Promise<T[]> {
  const dirPath = path.join(process.cwd(), directory);

  try {
    const files = await fs.readdir(dirPath);

    const items: (T | undefined)[] = await Promise.all(
      files
        .filter((filename) => filename.endsWith(".md"))
        .map(async (filename) => {
          try {
            const filePath = path.join(dirPath, filename);
            const fileContents = await fs.readFile(filePath, "utf8");
            const { data, content } = matter(fileContents);

            const fullData = {
              ...data,
              slug: filename.replace(/\.md$/, ""),
              content,
            };

            return schema.parse(fullData);
          } catch (error) {
            console.error(`Error processing ${filename}:`, error);
            return undefined;
          }
        }),
    );

    return items
      .filter((item): item is T => item !== undefined)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error(`Error reading directory ${directory}:`, error);
    return [];
  }
}

async function getMarkdownFile<T>(
  directory: string,
  slug: string,
  schema: z.ZodSchema<T>,
): Promise<T | undefined> {
  const filePath = path.join(process.cwd(), directory, `${slug}.md`);

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const fullData = {
      ...data,
      slug,
      content,
    };

    return schema.parse(fullData);
  } catch (error) {
    console.error(`Error processing ${slug}.md:`, error);
    return undefined;
  }
}

const BlogPostSchema = z
  .object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    slug: z.string(),
    content: z.string(),
  })
  .transform((data) => ({
    ...data,
    date: new Date(data.date).toISOString(),
  }));

export type BlogPost = z.infer<typeof BlogPostSchema>;

export async function getBlogPosts(): Promise<BlogPost[]> {
  return getMarkdownFiles("blogs", BlogPostSchema);
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  return getMarkdownFile("blogs", slug, BlogPostSchema);
}

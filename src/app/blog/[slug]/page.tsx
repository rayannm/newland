import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogPostTemplate } from "@/components/blog/BlogPostTemplate";
import {
  blogPosts,
  getBlogPostBySlug,
  getRecentBlogPosts,
} from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog post not found | Enjamb",
    };
  }

  return {
    title: `${post.title} | Enjamb`,
    description: post.metaDescription,
  };
}

function ensureRenderableSections(post: (typeof blogPosts)[number]) {
  if (post.sections && post.sections.length > 0) {
    return post;
  }

  return {
    ...post,
    sections: [
      {
        id: "overview",
        title: "Overview",
        paragraphs: [
          post.excerpt,
          "This post is part of the Enjamb blog template system and can be expanded with full long-form sections as the article is developed.",
        ],
      },
      {
        id: "what-we-are-thinking-about",
        title: "What we're thinking about",
        paragraphs: [
          "We use the blog to document product decisions, workflow insights, collaboration patterns, and the practical details behind scientific writing and manuscript tooling.",
        ],
      },
    ],
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const recentPosts = getRecentBlogPosts(post.slug);
  const renderablePost = ensureRenderableSections(post);

  return <BlogPostTemplate post={renderablePost} recentPosts={recentPosts} />;
}

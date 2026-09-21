import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostLayout from "@/components/BlogPostLayout";
import { blogPosts, getBlogPost } from "@/data/blog-posts";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article Not Found | Driftless Area Pest Control" };
  }

  return {
    title: `${post.title} | Driftless Area Pest Control`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return <BlogPostLayout post={post} />;
}

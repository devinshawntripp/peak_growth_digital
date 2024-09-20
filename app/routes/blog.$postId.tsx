import React from 'react';
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      { title: "Blog Post Not Found" },
      { name: "description", content: "The requested blog post could not be found." },
    ];
  }
  return [
    { title: `${data.title} - Peak Growth Digital Blog` },
    { name: "description", content: data.content.substring(0, 160) },
  ];
};

export const loader: LoaderFunction = async ({ params }) => {
  // In a real application, you would fetch this data from a database or CMS
  const posts: Record<string, BlogPost> = {
    "1": {
      id: "1",
      title: "5 SEO Strategies to Boost Your Website Ranking",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2023-04-15",
    },
    "2": {
      id: "2",
      title: "The Importance of Local SEO for Small Businesses",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: "2023-04-10",
    },
    "3": {
      id: "3",
      title: "Maximizing ROI with Pay-Per-Click Advertising",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      date: "2023-04-05",
    },
  };

  const post = posts[params.postId as string] || null;

  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }

  return json(post);
};

export default function BlogPost() {
  const post = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      <div className="prose lg:prose-xl">{post.content}</div>
    </div>
  );
}
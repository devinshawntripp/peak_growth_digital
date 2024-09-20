import React from 'react';
import { json } from "@remix-run/node";
import { useLoaderData, useSearchParams, Link } from "@remix-run/react";
import type { MetaFunction, LoaderFunction } from "@remix-run/node";
import BlogSearch from '~/components/BlogSearch';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
}

export const meta: MetaFunction = () => {
  return [
    { title: "Peak Growth Digital Blog - Digital Marketing Insights" },
    { name: "description", content: "Stay up-to-date with the latest digital marketing trends, tips, and strategies from Peak Growth Digital." },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('q')?.toLowerCase() || '';

  // In a real application, you would fetch this data from a database or CMS
  const allPosts: BlogPost[] = [
    {
      id: "1",
      title: "5 SEO Strategies to Boost Your Website Ranking",
      excerpt: "Learn the top SEO strategies that can help improve your website's visibility in search engine results.",
      date: "2023-04-15",
    },
    {
      id: "2",
      title: "The Importance of Local SEO for Small Businesses",
      excerpt: "Discover why local SEO is crucial for small businesses and how to optimize your online presence for local searches.",
      date: "2023-04-10",
    },
    {
      id: "3",
      title: "Maximizing ROI with Pay-Per-Click Advertising",
      excerpt: "Explore effective strategies to maximize your return on investment in pay-per-click advertising campaigns.",
      date: "2023-04-05",
    },
  ];

  const filteredPosts = searchTerm
    ? allPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm) || 
        post.excerpt.toLowerCase().includes(searchTerm)
      )
    : allPosts;

  return json({ posts: filteredPosts });
};

export default function BlogIndex() {
  const { posts } = useLoaderData<typeof loader>();
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q') || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Peak Growth Digital Blog</h1>
      <BlogSearch />
      {searchTerm && (
        <p className="mb-4">
          Showing results for: <span className="font-bold">{searchTerm}</span>
        </p>
      )}
      {posts.length === 0 ? (
        <p>No posts found. Try a different search term.</p>
      ) : (
        <div className="grid gap-8">
          {posts.map((post: BlogPost) => (
            <div key={post.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p>{post.excerpt}</p>
                <div className="card-actions justify-end">
                  <Link to={`/blog/${post.id}`} className="btn btn-primary">Read More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
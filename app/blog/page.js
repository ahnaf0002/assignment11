import React from 'react';
import Menu from "../components/Menu";
import Link from 'next/link';
import blogData from '../../data/blogData.json'; // Import your blog data

const BlogPage = () => {
  return (
    <div>
      <Menu />
      <h1>Welcome to our blog post</h1>
      <ul>
        {blogData.map(post => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;

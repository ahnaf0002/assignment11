import React from 'react';
import Menu from "../../components/Menu";
import blogData from '../../../data/blogData.json'; // Import your blog data

const PostPage = ({ post }) => {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <Menu />
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const postId = parseInt(params.id, 10);
  const post = blogData.find(post => post.id === postId);

  return {
    props: {
      post,
    },
  };
}

export default PostPage;

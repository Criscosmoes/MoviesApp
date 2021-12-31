import React from "react";

const Posts = ({ allPosts }) => {
  const renderedPosts = allPosts.map((cur) => {
    return <li key={cur.id}>{cur.title}</li>;
  });
  return <ul>{renderedPosts}</ul>;
};

export default Posts;

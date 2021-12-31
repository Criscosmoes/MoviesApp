import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";

import Counter from "../features/counter/Counter";
import Posts from "../features/posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../features/posts/postsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <Counter />
      <Posts allPosts={entities} />
    </div>
  );
}

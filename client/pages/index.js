import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Counter from "../features/counter/Counter";

export default function Home() {
  return (
    <div>
      <Counter />
    </div>
  );
}


import { cacheTag } from "next/cache";
import css from "./page.module.css";
import GroupFeed from "@/components/GroupFeed";

const fetchLatestArticles = async () => {
  
}

export default async function Home() {
  'use cache'
  cacheTag('lander')

  const articleData = fetchLatestArticles();

  return (
    <main className={css.main}>
      <GroupFeed articleData={articleData}/>
    </main>
  );
}

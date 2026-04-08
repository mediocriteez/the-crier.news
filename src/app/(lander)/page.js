
import { cacheTag } from "next/cache";
import css from "./page.module.css";
import GroupFeed from "@/components/GroupFeed";
import { supabase } from "@/services/supabase/createClient";

const fetchLatestArticles = async () => {
  'use cache'
  cacheTag('landerFeed')
  try {
    const {data, error} = await supabase.rpc('fetchLanderFeed', {})
    if(error) throw error
    return data
  } catch (error) {
    console.error(error)
  }

}

export default async function Home() {
  const articleData = await fetchLatestArticles();
  console.log(articleData)
  return (
    <main className={css.main}>
      <GroupFeed articleData={articleData}/>
    </main>
  );
}

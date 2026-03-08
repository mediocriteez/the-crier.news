
import css from "./page.module.css";
import GroupFeed from "@/components/GroupFeed";

const articleData = {
  'March 03, 2026': [
    {
      title: 'Financial Records Confirm NC Rep. Lindsay Graham Enlisted "Looks-Maxxer" Clavicular to Help Him Develop a Jawline',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'Financial Records Confirm NC Rep. Lindsay Graham Enlisted "Looks-Maxxer" Clavicular to Help Him Develop a Jawline',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
  ],
  'Mar 02, 2026': [
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
  ],
  'Mar 01, 2026': [
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
    {
      title: 'A Name of a Totally Real Story',
      image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
      date_created: '10:00 pm',
      page_url: '/'
    },
  ]
}

export default function Home() {
  return (
    <main className={css.main}>
      <GroupFeed articleData={articleData}/>
    </main>
  );
}

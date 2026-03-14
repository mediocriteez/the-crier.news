import DonateForm from './DonateForm'
import css from './page.module.css'
import SocialLinks from './SocialLinks'

const articleData = {
    title: 'Financial Records Confirm NC Rep. Lindsay Graham Enlisted "Looks-Maxxer" Clavicular to Help Him Develop a Jawline',
    image_url: 'https://d3i6fh83elv35t.cloudfront.net/static/2026/02/2026-02-28T131320Z_849607550_RC21VJA8EXBQ_RTRMADP_3_IRAN-CRISIS-BLAST-1024x683.jpg',
    date_created: '10:00 pm',
    page_url: '/',
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type....`
}


const page = ({}) => {
    return(
        <main className={css.root}>
            <h1 className={css.title}>{articleData.title}</h1>
            <img src={articleData.image_url} alt={articleData.title}/>
            <p className={css.articleText}>{articleData.text}</p>
            <div className={css.gagBox}>
                <p className={css.gagText}>Just Kidding!</p>
                <SocialLinks />
                <img className={css.laughingEmoji} src="/laughing_emoji.png" alt="laughing emoji"/>
            </div>
            <DonateForm />
        </main>
    )
}

export default page
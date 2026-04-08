import { supabase } from '@/services/supabase/createClient'
import { notFound } from 'next/navigation'
import DonateForm from './DonateForm'
import SocialLinks from './SocialLinks'
import css from './page.module.css'

const page = async ({params}) => {
    const articleID = await params.then(r => r.articleID[0])
    console.log(articleID)
    let articleData
    let contentError = null

    try {
        const {data, error} = await supabase.from('article').select().eq('id', articleID)
        if(error) throw error
        if(data.length < 1) throw {message: 'content not found!'}
        articleData = data?.[0]
    } catch (error) {
        console.error(error)
        notFound()
    }

    return(
        <main className={css.root}>
            <h1 className={css.title}>{articleData.title}</h1>
            <img src={articleData.image_url} alt={articleData.title}/>
            <p className={css.articleText}>{articleData.text}...</p>
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
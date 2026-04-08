import Link from 'next/link'
import css from './index.module.css'

const ArticleCard = ({articleData, layout="compact"}) => {

    const {
        id,
        slug
    } = articleData

    const timeStamp = (new Date(articleData.created_at)).toLocaleTimeString('en-US',{
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })

    return(
        <Link /*href={articleData?.page_url}*/ href={`/article/${id}/${slug}`}>
            <article data-layout={layout} className={css.root}>
                <div className={css.descriptionContainer}>
                    <p className={css.title}>{articleData?.title}</p>
                    <p className={css.timeStamp}>{timeStamp}</p>
                </div>
                <img src={articleData?.image_url} alt={articleData?.title}/>
            </article>
        </Link>
    )
}

export default ArticleCard
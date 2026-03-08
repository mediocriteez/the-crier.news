import Link from 'next/link'
import css from './index.module.css'

const ArticleCard = ({articleData, layout="compact"}) => {
    return(
        <Link href={articleData?.page_url}>
            <article data-layout={layout} className={css.root}>
                <div className={css.descriptionContainer}>
                    <p className={css.title}>{articleData?.title}</p>
                    <p className={css.timeStamp}>{articleData?.date_created}</p>
                </div>
                <img src={articleData?.image_url} alt={articleData?.title}/>
            </article>
        </Link>
    )
}

export default ArticleCard
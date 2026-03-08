import ArticleCard from './ArticleCard'
import css from './index.module.css'

const Feed = ({articleData}) => {

    const remainingArticles = [...articleData]
    const firstArticle = remainingArticles?.shift?.()

    return(
        <ul className={css.root}>
            <li>
                <ArticleCard layout="feature" articleData={firstArticle} />
            </li>
            {remainingArticles?.map?.((a, i) => <li key={i}> <ArticleCard layout="compact" articleData={a} /> </li>)}
        </ul>
    )
}

export default Feed
import Links from "./Links"
import css from './index.module.css'

const SocialLinks = ({}) => {
    return(
        <div className={css.root}>
            <div>
                <p className={css.title}>Share</p>
                <Links />
            </div>
            <div>
                <p className={css.title}>Follow</p>
                <Links />
            </div>
            <span className={css.horizontal}></span>
            <span className={css.verticle}></span>
        </div>
    )
}

export default SocialLinks
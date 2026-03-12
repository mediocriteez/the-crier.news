import Link from "next/link"
import css from './index.module.css'

const href={
    bluesky: '/',
    twitter: '/'
}

const Links = ({}) => {
    return(
        <ul className={css.root}>
            <li><Link href={href.twitter}><img src="twitter_logo.svg" alt="twitter logo" title="Twitter"/></Link></li>
            <li><Link href={href.bluesky}><img src="bluesky_logo.svg" alt="bluesky logo" title="Bluesky"/></Link></li>
        </ul>
    )
}

export default Links
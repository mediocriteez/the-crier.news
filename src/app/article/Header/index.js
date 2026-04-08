import Link from 'next/link'
import css from './index.module.css'
import LogoSVG from './LogoSVG'

const Header = ({}) => {
    return(
        <header className={css.root}>
            <Link href="/" className={css.logo}>
                <LogoSVG fill="#171768"/>
                <p className={css.title}>The Crier</p>
            </Link>
        </header>
    )
}

export default Header
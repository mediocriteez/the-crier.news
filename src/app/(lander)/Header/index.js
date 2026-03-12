import Link from 'next/link'
import css from './index.module.css'
import LogoSVG from './LogoSVG'

const Header = ({}) => {
    return(
        <header className={css.root}>
            <Link href="/" className={css.logo}>
                <LogoSVG />
            </Link>
            <h1 className={css.title}>The Crier</h1>
        </header>
    )
}

export default Header
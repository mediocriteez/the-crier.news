import Link from 'next/link'
import css from './index.module.css'
import LogoSVG from './LogoSVG'

const Header = ({}) => {
    return(
        <header className={css.root}>
            <Link href={process.env.NEXT_PUBLIC_ROOT_URL} className={css.logo}>
                <LogoSVG />
            </Link>
            <p className={css.title}>The Crier</p>
        </header>
    )
}

export default Header
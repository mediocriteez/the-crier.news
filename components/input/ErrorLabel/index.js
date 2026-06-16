import css from './index.module.css'

const ErrorLabel = ({text, error, children, ...props}) => {
    return(
        <label {...props} className={css.root}>
            {text &&
                <span>{text}</span>
            }
            {children}
            {error &&
                <span>{error}</span>
            }
        </label>
    )
}

export default ErrorLabel
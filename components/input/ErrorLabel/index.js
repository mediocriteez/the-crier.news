const ErrorLabel = ({text, error, children, ...props}) => {
    return(
        <label {...props}>
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
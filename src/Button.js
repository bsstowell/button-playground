export const Button = (props) => {
    const {buttonType = 'button', className, onClick, content} = props
    return (
        <button
            type={buttonType}
            className={`button ${className}`}
            onClick={onClick}
        >
            {content}
        </button>
    )
}

//these do the same thing...
// function printThis(string) { console.log(string) }
// const printThis = (string) => { console.log(string) }

/*
    `button ${className}`

    this is called string templating
    Whole string is wrapped in backticks (``)
    any variable is wrapped in ${} within the backticks
*/


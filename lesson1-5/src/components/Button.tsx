

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value?: string
}


export function Button({ value = 'submit', ...props }: ButtonProps) {
    return (
        <button {...props}>{value}</button>
    );
}

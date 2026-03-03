import { cn } from "@/lib/utils";


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    value?: string
}


export function Button({ value = 'submit', ...props }: ButtonProps) {
    return (
        <button className={cn("bg-indigo-600")} {...props}>{value}</button>
    );
}


export function ButtonReset({ value = 'reset', ...props }: ButtonProps) {
    return (
        <button className={cn("bg-indigo-600")} {...props}>{value}</button>
    );
}
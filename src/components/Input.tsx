import { Input as ShadInput } from "@/components/ui/input"
import type React from "react";


export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => <div className="bg-fuchsia-100"><ShadInput {...props}/></div>

type Props = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: "text" | "email";
}

export const OldInput = ({
    value,
    onChange,
    type = 'text',
}: Props) => {
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange(e);
    }
    return <ShadInput value={value} onChange={(e) => handleChange(e)} type={type} placeholder="enter value..." />;
}

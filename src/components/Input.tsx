import { Input as ShadInput } from "@/components/ui/input"


export const Input = <div className="bg-blue-700"><ShadInput /></div>

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

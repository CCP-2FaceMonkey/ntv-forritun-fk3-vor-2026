import { Field } from '../ui/field';
import { Input } from '../ui/input';

type InputFieldProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export function InputField({ value, placeholder, ...props }: InputFieldProps) {
  return (
    <Field>
      <Input
        className="bg-white"
        id="firstName"
        autoComplete="off"
        placeholder={placeholder}
        // TODO: Set values to all input fields in the form
        value={value}
        onChange={(e) => {
          props.onChange(e);
        }}
      />
    </Field>
  );
}

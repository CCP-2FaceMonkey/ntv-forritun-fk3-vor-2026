import type { ComponentPropsWithoutRef } from 'react';

type SharedProps = {
  label?: string;
  hint?: string;
  error?: string;
};

type InputProps = SharedProps & { multiline?: false } & ComponentPropsWithoutRef<'input'>;
type TextareaProps = SharedProps & { multiline: true } & ComponentPropsWithoutRef<'textarea'>;

type TextInputProps = InputProps | TextareaProps;

function TextInput(props: TextInputProps) {
  const { label, hint, error, className } = props;

  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      {hint && <span className="text-xs text-gray-500">{hint}</span>}
      {props.multiline ? (
        <textarea
          {...(props as TextareaProps)}
          className={`rounded border px-3 py-2 ${error ? 'border-red-500' : 'border-gray-300'} ${className || ''}`}
        />
      ) : (
        <input
          {...(props as InputProps)}
          className={`rounded border px-3 py-2 ${error ? 'border-red-500' : 'border-gray-300'} ${className || ''}`}
        />
      )}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}

export { TextInput };

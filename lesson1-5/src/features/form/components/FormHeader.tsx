import { CardHeader, CardTitle } from '@/components/ui/card';

type FormHeaderProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value?: string;
};

export function FormHeader({ value = 'submit' }: FormHeaderProps) {
  return (
    <CardHeader>
      <div className="flex items-center gap-2">
        <div className="grow border h-0"></div>
        <CardTitle className="text-white">{value}</CardTitle>
        <div className="grow border h-0"></div>
      </div>
    </CardHeader>
  );
}

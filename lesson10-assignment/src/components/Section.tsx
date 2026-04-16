import type { ComponentPropsWithoutRef, ReactNode } from 'react';

type SectionProps = ComponentPropsWithoutRef<'section'> & {
  title: string;
  children: ReactNode;
  bordered?: boolean;
  background?: 'none' | 'muted' | 'accent';
};

function Section({ title, children, bordered, background = 'none', className, ...props }: SectionProps) {
  const bgStyles = {
    none: '',
    muted: 'bg-gray-50',
    accent: 'bg-blue-50',
  };

  return (
    <section
      className={`${bordered ? 'rounded-lg border' : ''} ${bgStyles[background]} ${className || ''}`}
      {...props}
    >
      <h2 className="mb-3 text-lg font-bold">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export { Section };

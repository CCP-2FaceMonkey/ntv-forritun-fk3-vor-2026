import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

type LinkProps<T extends ElementType = 'a'> = {
  as?: T;
  variant?: 'default' | 'muted' | 'underline';
  children?: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'variant' | 'children' | 'className'>;

function Link<T extends ElementType = 'a'>({
  as,
  variant = 'default',
  children,
  className,
  ...props
}: LinkProps<T>) {
  const Component = as || 'a';

  const variantStyles = {
    default: 'text-blue-600 hover:text-blue-800',
    muted: 'text-gray-500 hover:text-gray-700',
    underline: 'text-blue-600 underline underline-offset-2 hover:text-blue-800',
  };

  return (
    <Component
      className={`inline-flex items-center gap-1 ${variantStyles[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Link };

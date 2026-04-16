import type { ComponentPropsWithoutRef } from 'react';

type AlertProps = ComponentPropsWithoutRef<'div'> & {
  severity?: 'info' | 'warning' | 'error' | 'success';
  title: string;
  onDismiss?: () => void;
};

function Alert({ severity = 'info', title, children, onDismiss, className, ...props }: AlertProps) {
  const severityStyles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800',
  };

  return (
    <div
      role="alert"
      className={`rounded border p-4 ${severityStyles[severity]} ${className || ''}`}
      {...props}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="font-semibold">{title}</p>
          {children && <div className="mt-1 text-sm">{children}</div>}
        </div>
        {onDismiss && (
          <button onClick={onDismiss} className="ml-4 text-lg leading-none">
            &times;
          </button>
        )}
      </div>
    </div>
  );
}

export { Alert };

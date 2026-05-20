import React from 'react';

type ButtonVariant = 'filled-navy' | 'filled-emerald' | 'filled-vivid' | 'outlined' | 'outlined-white' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  'filled-navy':
    'bg-navy text-white hover:bg-navy-deep active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-emerald-vivid focus-visible:ring-offset-2',
  'filled-emerald':
    'bg-emerald text-white hover:bg-emerald/90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-emerald focus-visible:ring-offset-2',
  'filled-vivid':
    'bg-emerald-vivid text-navy-deep hover:bg-emerald-vivid/90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep',
  'outlined':
    'border border-navy text-navy bg-transparent hover:bg-navy-light active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
  'outlined-white':
    'border border-white text-white bg-transparent hover:bg-white/10 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep',
  'ghost':
    'text-navy bg-transparent hover:bg-navy-light active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-label-m gap-1.5',
  md: 'h-11 px-6 text-label-l gap-2',
  lg: 'h-12 px-8 text-label-l gap-2',
};

export function Button({
  variant = 'filled-navy',
  size = 'md',
  icon,
  iconPosition = 'left',
  loading = false,
  fullWidth = false,
  disabled,
  children,
  className = '',
  as: Tag = 'button',
  href,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-body font-medium rounded-full transition-all duration-hover ease-hover outline-none select-none';

  const disabledClasses = disabled || loading
    ? 'opacity-40 cursor-not-allowed pointer-events-none'
    : '';

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = [base, variantClasses[variant], sizeClasses[size], disabledClasses, widthClass, className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin w-4 h-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
        </svg>
      )}
      {!loading && icon && iconPosition === 'left' && (
        <span className="shrink-0 w-4 h-4" aria-hidden="true">{icon}</span>
      )}
      {children && <span>{children}</span>}
      {!loading && icon && iconPosition === 'right' && (
        <span className="shrink-0 w-4 h-4" aria-hidden="true">{icon}</span>
      )}
    </>
  );

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {content}
    </button>
  );
}

// Raccourci : bouton icône seul
interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  label: string; // aria-label obligatoire
  variant?: 'navy' | 'ghost';
  size?: 'sm' | 'md';
}

export function IconButton({ icon, label, variant = 'ghost', size = 'md', className = '', ...props }: IconButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md transition-all duration-hover ease-hover outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variantMap = {
    navy:  'text-white bg-navy hover:bg-navy-deep focus-visible:ring-white',
    ghost: 'text-navy bg-transparent hover:bg-navy-light focus-visible:ring-navy',
  };
  const sizeMap = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
  };

  return (
    <button
      aria-label={label}
      className={[base, variantMap[variant], sizeMap[size], className].join(' ')}
      {...props}
    >
      <span className="w-5 h-5" aria-hidden="true">{icon}</span>
    </button>
  );
}

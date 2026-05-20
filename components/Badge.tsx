import React from 'react';

// ─── Badge Verticale ────────────────────────────────────────

type Verticale = 'associations' | 'formations' | 'entreprises' | 'innovation';

const verticaleStyles: Record<Verticale, { bg: string; text: string; label: string }> = {
  associations: { bg: 'bg-vert/15',   text: 'text-vert-dark',   label: 'Associations' },
  formations:   { bg: 'bg-teal/15',   text: 'text-teal-dark',   label: 'Formations' },
  entreprises:  { bg: 'bg-bleu/15',   text: 'text-bleu-dark',   label: 'Entreprises' },
  innovation:   { bg: 'bg-violet/15', text: 'text-violet-dark', label: 'Innovation' },
};

interface BadgeVerticaleProps {
  verticale: Verticale;
  icon?: React.ReactNode;
  className?: string;
}

export function BadgeVerticale({ verticale, icon, className = '' }: BadgeVerticaleProps) {
  const style = verticaleStyles[verticale];

  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 font-body text-label-m font-medium',
        'px-2.5 py-1 rounded-badge',
        style.bg,
        style.text,
        className,
      ].join(' ')}
    >
      {icon && <span className="w-3.5 h-3.5 shrink-0" aria-hidden="true">{icon}</span>}
      {style.label}
    </span>
  );
}

// ─── Badge générique ────────────────────────────────────────

type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'neutral';

const badgeVariants: Record<BadgeVariant, string> = {
  success: 'bg-success/10 text-success',
  warning: 'bg-warning/10 text-warning',
  error:   'bg-error/10   text-error',
  info:    'bg-info/10    text-info',
  neutral: 'bg-surface-soft text-text-muted',
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'neutral', children, icon, className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 font-body text-label-m font-medium',
        'px-2.5 py-0.5 rounded-badge',
        badgeVariants[variant],
        className,
      ].join(' ')}
    >
      {icon && <span className="w-3.5 h-3.5 shrink-0" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}

// ─── Tag / Chip ─────────────────────────────────────────────

interface TagProps {
  children: React.ReactNode;
  onRemove?: () => void;
  selected?: boolean;
  className?: string;
}

export function Tag({ children, onRemove, selected = false, className = '' }: TagProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1.5 font-body text-label-m font-medium',
        'px-3 py-1 rounded-full border transition-colors duration-hover ease-hover',
        selected
          ? 'bg-navy text-white border-navy'
          : 'bg-transparent text-navy border-border hover:bg-navy-light hover:border-navy',
        className,
      ].join(' ')}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="w-4 h-4 flex items-center justify-center rounded-full hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
          aria-label={`Retirer ${children}`}
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3" aria-hidden="true">
            <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </span>
  );
}

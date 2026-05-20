import React from 'react';

// ─── Card Standard ──────────────────────────────────────────

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  as?: React.ElementType;
  onClick?: () => void;
}

export function Card({ children, className = '', hover = true, as: Tag = 'div', onClick }: CardProps) {
  const base = 'bg-white rounded-lg shadow-elevation-1 transition-shadow duration-hover ease-hover';
  const hoverClass = hover ? 'hover:shadow-elevation-2' : '';
  const interactiveClass = onClick ? 'cursor-pointer' : '';

  return (
    <Tag
      className={[base, hoverClass, interactiveClass, className].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      {children}
    </Tag>
  );
}

// ─── Card Metric (statistiques clés) ────────────────────────

interface CardMetricProps {
  value: string;
  label: string;
  source?: string;
  className?: string;
}

export function CardMetric({ value, label, source, className = '' }: CardMetricProps) {
  return (
    <div
      className={['bg-surface-soft rounded-lg p-6 flex flex-col gap-2', className].join(' ')}
      aria-label={`${value} — ${label}`}
    >
      <span className="font-display text-display-l text-navy leading-none">{value}</span>
      <p className="font-body text-body-s text-text-muted">{label}</p>
      {source && (
        <span className="font-body text-label-s text-text-disabled">{source}</span>
      )}
    </div>
  );
}

// ─── Card Verticale (gamme métier) ──────────────────────────

type Verticale = 'associations' | 'formations' | 'entreprises' | 'innovation';

const verticaleConfig: Record<Verticale, { label: string; bgClass: string; textClass: string; borderClass: string }> = {
  associations: {
    label: 'Associations',
    bgClass:     'bg-vert/10',
    textClass:   'text-vert-dark',
    borderClass: 'border-vert/30',
  },
  formations: {
    label: 'Formations',
    bgClass:     'bg-teal/10',
    textClass:   'text-teal-dark',
    borderClass: 'border-teal/30',
  },
  entreprises: {
    label: 'Entreprises',
    bgClass:     'bg-bleu/10',
    textClass:   'text-bleu-dark',
    borderClass: 'border-bleu/30',
  },
  innovation: {
    label: 'Innovation',
    bgClass:     'bg-violet/10',
    textClass:   'text-violet-dark',
    borderClass: 'border-violet/30',
  },
};

interface CardVerticaleProps {
  verticale: Verticale;
  title: string;
  description: string;
  icon?: React.ReactNode;
  cta?: { label: string; href: string };
  className?: string;
}

export function CardVerticale({ verticale, title, description, icon, cta, className = '' }: CardVerticaleProps) {
  const config = verticaleConfig[verticale];

  return (
    <article
      className={[
        'bg-white rounded-lg shadow-elevation-1 hover:shadow-elevation-2 transition-shadow duration-hover ease-hover',
        'border border-border p-6 flex flex-col gap-4',
        className,
      ].join(' ')}
    >
      <div className="flex items-start gap-3">
        {icon && (
          <span
            className={['w-10 h-10 rounded-lg flex items-center justify-center shrink-0', config.bgClass].join(' ')}
            aria-hidden="true"
          >
            <span className={['w-5 h-5', config.textClass].join(' ')}>{icon}</span>
          </span>
        )}
        <div className="flex flex-col gap-1">
          <span className={['inline-flex self-start font-body text-label-m font-medium px-2 py-0.5 rounded-badge', config.bgClass, config.textClass].join(' ')}>
            {config.label}
          </span>
          <h3 className="font-display text-headline-s text-navy">{title}</h3>
        </div>
      </div>
      <p className="font-body text-body-m text-text-muted leading-relaxed">{description}</p>
      {cta && (
        <a
          href={cta.href}
          className={['font-body text-label-l font-medium self-start hover:underline focus-visible:outline-2 focus-visible:outline-offset-2', config.textClass].join(' ')}
        >
          {cta.label} →
        </a>
      )}
    </article>
  );
}

// ─── Card Dark (sur fond sombre) ────────────────────────────

interface CardDarkProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDark({ children, className = '' }: CardDarkProps) {
  return (
    <div
      className={[
        'bg-navy rounded-lg shadow-elevation-2 border border-white/10 p-6',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

// ─── Card Partner (logo partenaire) ─────────────────────────

interface CardPartnerProps {
  name: string;
  logo: React.ReactNode;
  className?: string;
}

export function CardPartner({ name, logo, className = '' }: CardPartnerProps) {
  return (
    <div
      className={[
        'bg-surface-soft rounded-lg p-4 flex items-center justify-center',
        'grayscale opacity-60 hover:grayscale-0 hover:opacity-100',
        'transition-all duration-hover ease-hover',
        className,
      ].join(' ')}
      aria-label={name}
    >
      {logo}
    </div>
  );
}

import React, { useEffect, useState } from 'react';

// ─── Spinner ────────────────────────────────────────────────

type SpinnerSize = 'sm' | 'md' | 'lg';

const spinnerSizes: Record<SpinnerSize, string> = {
  sm: 'w-5 h-5',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
};

export function Spinner({ size = 'md', label = 'Chargement…' }: { size?: SpinnerSize; label?: string }) {
  return (
    <span role="status" aria-label={label}>
      <svg
        className={['animate-spin text-emerald', spinnerSizes[size]].join(' ')}
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
    </span>
  );
}

// ─── Skeleton ───────────────────────────────────────────────

interface SkeletonProps {
  width?: string;
  height?: string;
  rounded?: string;
  className?: string;
}

export function Skeleton({ width = 'w-full', height = 'h-4', rounded = 'rounded-md', className = '' }: SkeletonProps) {
  return (
    <div
      className={[
        'animate-shimmer bg-gradient-to-r from-border via-surface-soft to-border bg-[length:1000px_100%]',
        width, height, rounded, className,
      ].join(' ')}
      aria-hidden="true"
    />
  );
}

// ─── Toast / Snackbar ───────────────────────────────────────

type ToastVariant = 'success' | 'error' | 'info' | 'warning';

const toastConfig: Record<ToastVariant, { bg: string; icon: React.ReactNode; label: string }> = {
  success: {
    bg: 'bg-success',
    label: 'Succès',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  error: {
    bg: 'bg-error',
    label: 'Erreur',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
    ),
  },
  info: {
    bg: 'bg-navy',
    label: 'Information',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
  },
  warning: {
    bg: 'bg-warning',
    label: 'Attention',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
  },
};

interface ToastProps {
  variant?: ToastVariant;
  message: string;
  action?: { label: string; onClick: () => void };
  duration?: number;
  onClose?: () => void;
}

export function Toast({ variant = 'info', message, action, duration = 4000, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);
  const config = toastConfig[variant];

  useEffect(() => {
    if (duration <= 0) return;
    const timer = setTimeout(() => {
      setVisible(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  if (!visible) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={[
        config.bg,
        'animate-slide-up',
        'flex items-center gap-3 px-5 py-3 rounded-lg shadow-elevation-4',
        'text-white max-w-sm w-full',
      ].join(' ')}
    >
      {config.icon}
      <p className="font-body text-body-s flex-1">{message}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="font-body text-label-l font-medium underline hover:no-underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white shrink-0"
        >
          {action.label}
        </button>
      )}
      <button
        onClick={() => { setVisible(false); onClose?.(); }}
        aria-label="Fermer"
        className="w-5 h-5 flex items-center justify-center hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white shrink-0"
      >
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" aria-hidden="true">
          <path d="M4 4l8 8M12 4l-8 8" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}

// ─── Progress Bar ───────────────────────────────────────────

interface ProgressBarProps {
  value: number; // 0–100
  label?: string;
  className?: string;
}

export function ProgressBar({ value, label, className = '' }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={['flex flex-col gap-1', className].join(' ')}>
      {label && (
        <span className="font-body text-label-m text-text-muted">{label}</span>
      )}
      <div
        className="w-full h-1 bg-border rounded-full overflow-hidden"
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <div
          className="h-full bg-emerald rounded-full transition-all duration-standard ease-standard"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}

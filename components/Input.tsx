import React from 'react';

// ─── Text Field ─────────────────────────────────────────────

interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  helperText?: string;
  errorText?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export function TextField({
  label,
  helperText,
  errorText,
  leadingIcon,
  trailingIcon,
  id,
  disabled,
  className = '',
  ...props
}: TextFieldProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  const hasError = Boolean(errorText);
  const descId = helperText || errorText ? `${inputId}-desc` : undefined;

  return (
    <div className={['flex flex-col gap-1.5', className].join(' ')}>
      <label
        htmlFor={inputId}
        className="font-body text-label-m font-medium text-text-muted"
      >
        {label}
      </label>
      <div className="relative flex items-center">
        {leadingIcon && (
          <span className="absolute left-4 w-4 h-4 text-text-muted pointer-events-none" aria-hidden="true">
            {leadingIcon}
          </span>
        )}
        <input
          id={inputId}
          disabled={disabled}
          aria-describedby={descId}
          aria-invalid={hasError}
          className={[
            'w-full h-12 px-4 rounded-md font-body text-body-m text-text',
            'bg-surface-soft border transition-colors duration-hover ease-hover',
            'placeholder:text-text-disabled',
            'focus:outline-none focus:bg-white focus:ring-2 focus:ring-offset-0',
            leadingIcon ? 'pl-10' : '',
            trailingIcon ? 'pr-10' : '',
            hasError
              ? 'border-error focus:ring-error'
              : 'border-border focus:border-navy focus:ring-navy',
            disabled ? 'opacity-40 cursor-not-allowed' : '',
          ].filter(Boolean).join(' ')}
          {...props}
        />
        {trailingIcon && (
          <span className="absolute right-4 w-4 h-4 text-text-muted pointer-events-none" aria-hidden="true">
            {trailingIcon}
          </span>
        )}
      </div>
      {(helperText || errorText) && (
        <p
          id={descId}
          className={['font-body text-body-s', hasError ? 'text-error' : 'text-text-muted'].join(' ')}
          role={hasError ? 'alert' : undefined}
        >
          {errorText ?? helperText}
        </p>
      )}
    </div>
  );
}

// ─── Textarea ───────────────────────────────────────────────

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  helperText?: string;
  errorText?: string;
}

export function Textarea({ label, helperText, errorText, id, disabled, className = '', ...props }: TextareaProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');
  const hasError = Boolean(errorText);
  const descId = helperText || errorText ? `${inputId}-desc` : undefined;

  return (
    <div className={['flex flex-col gap-1.5', className].join(' ')}>
      <label htmlFor={inputId} className="font-body text-label-m font-medium text-text-muted">
        {label}
      </label>
      <textarea
        id={inputId}
        disabled={disabled}
        aria-describedby={descId}
        aria-invalid={hasError}
        className={[
          'w-full min-h-[120px] px-4 py-3 rounded-md font-body text-body-m text-text',
          'bg-surface-soft border transition-colors duration-hover ease-hover',
          'placeholder:text-text-disabled resize-y',
          'focus:outline-none focus:bg-white focus:ring-2 focus:ring-offset-0',
          hasError
            ? 'border-error focus:ring-error'
            : 'border-border focus:border-navy focus:ring-navy',
          disabled ? 'opacity-40 cursor-not-allowed' : '',
        ].filter(Boolean).join(' ')}
        {...props}
      />
      {(helperText || errorText) && (
        <p
          id={descId}
          className={['font-body text-body-s', hasError ? 'text-error' : 'text-text-muted'].join(' ')}
          role={hasError ? 'alert' : undefined}
        >
          {errorText ?? helperText}
        </p>
      )}
    </div>
  );
}

// ─── Checkbox ───────────────────────────────────────────────

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  helperText?: string;
}

export function Checkbox({ label, helperText, id, className = '', ...props }: CheckboxProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className={['flex gap-3', className].join(' ')}>
      <input
        type="checkbox"
        id={inputId}
        className={[
          'w-5 h-5 mt-0.5 shrink-0 rounded border-2 border-border',
          'appearance-none cursor-pointer transition-colors duration-hover ease-hover',
          'checked:bg-navy checked:border-navy',
          'focus-visible:ring-2 focus-visible:ring-emerald-vivid focus-visible:ring-offset-2',
        ].join(' ')}
        {...props}
      />
      <div className="flex flex-col gap-0.5">
        <label htmlFor={inputId} className="font-body text-body-m text-text cursor-pointer">
          {label}
        </label>
        {helperText && (
          <p className="font-body text-body-s text-text-muted">{helperText}</p>
        )}
      </div>
    </div>
  );
}

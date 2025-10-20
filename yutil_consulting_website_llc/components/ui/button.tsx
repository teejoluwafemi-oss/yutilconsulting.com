
import * as React from 'react';
import clsx from 'clsx';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline';
};

export function Button({ className, variant='solid', ...props }: Props) {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition';
  const solid = 'bg-gradient-to-r from-brand-blue to-brand-orange text-white shadow hover:opacity-90';
  const outline = 'border border-blue-300/60 bg-white hover:bg-white/90';
  const styles = clsx(base, variant === 'solid' ? solid : outline, className);
  return <button className={styles} {...props} />;
}
export default Button;

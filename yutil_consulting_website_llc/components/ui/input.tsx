
import * as React from 'react';
import clsx from 'clsx';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={clsx('w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue/40', props.className)} />;
}
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={clsx('w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-brand-blue/40', props.className)} />;
}

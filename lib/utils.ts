import { clsx } from 'clsx';
export const cn = (...inputs: Array<string | false | null | undefined>) => clsx(inputs);
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

import Link from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface AppLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  children: ReactNode;
}

export function AppLink({ to, children, ...rest }: AppLinkProps) {
  return (
    <Link href={to} {...rest}>
      {children}
    </Link>
  );
}

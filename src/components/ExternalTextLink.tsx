import Link from 'next/link';
import { HiExternalLink } from 'react-icons/hi';

interface ExternalTextLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ExternalTextLink({ href, children, className = '' }: ExternalTextLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? `btn-text btn-text-inline ${className}` : 'btn-text btn-text-inline'}
    >
      {children}
      <HiExternalLink aria-hidden />
    </Link>
  );
}

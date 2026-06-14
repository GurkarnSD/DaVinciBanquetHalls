import Image from 'next/image';

interface MediaPlaceholderProps {
  className?: string;
}

export default function MediaPlaceholder({ className = '' }: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder h-full w-full p-4 sm:p-6 ${className}`}>
      <Image
        src="/assets/images/logos/logo.png"
        alt="Da Vinci Banquet Halls"
        width={160}
        height={80}
        className="media-placeholder-logo h-14 w-auto opacity-90 sm:h-16"
      />
    </div>
  );
}

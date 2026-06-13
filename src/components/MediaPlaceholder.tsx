import Image from 'next/image';

interface MediaPlaceholderProps {
  className?: string;
}

export default function MediaPlaceholder({ className = '' }: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder h-full w-full p-4 sm:p-6 ${className}`}>
      <div className="media-placeholder-logo">
        <Image
          src="/assets/images/logos/logo.png"
          alt=""
          width={160}
          height={80}
          className="h-12 w-auto opacity-95 sm:h-14"
        />
      </div>
    </div>
  );
}

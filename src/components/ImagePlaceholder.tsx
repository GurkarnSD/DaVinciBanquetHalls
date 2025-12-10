'use client';

interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  label?: string;
  className?: string;
}

export default function ImagePlaceholder({
  width = '100%',
  height = '100%',
  label = 'Image Placeholder',
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center gap-2 p-4">
        <svg
          className="h-12 w-12 text-davinci-gold/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="text-xs font-medium text-davinci-gold/80">{label}</span>
      </div>
    </div>
  );
}



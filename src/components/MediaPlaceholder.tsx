interface MediaPlaceholderProps {
  title: string;
  aspect: string;
  category?: string;
  slotId?: string;
  className?: string;
}

export default function MediaPlaceholder({ title, aspect, category, slotId, className = '' }: MediaPlaceholderProps) {
  return (
    <div className={`media-placeholder h-full w-full p-4 sm:p-6 ${className}`}>
      {category && <p className="eyebrow mb-2">{category}</p>}
      {slotId && <p className="text-theme-muted mb-2 font-mono text-[0.6rem] tracking-wider uppercase">{slotId}</p>}
      <p className="media-placeholder-title mb-3 max-w-[20rem] font-serif text-sm leading-snug sm:text-base">{title}</p>
      <p className="media-placeholder-aspect rounded px-3 py-1.5 text-[0.65rem] tracking-widest uppercase">{aspect}</p>
    </div>
  );
}

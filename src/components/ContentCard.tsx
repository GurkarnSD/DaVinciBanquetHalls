import type { ReactNode } from 'react';

interface ContentCardProps {
  title: string;
  children: ReactNode;
}

export default function ContentCard({ title, children }: ContentCardProps) {
  return (
    <article className="surface p-8 md:p-10">
      <h2 className="text-theme-heading mb-6 font-serif text-3xl font-medium md:text-4xl">{title}</h2>
      <div className="text-theme-body space-y-5 text-base leading-relaxed [&_li]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}

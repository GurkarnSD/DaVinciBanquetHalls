type MenuCourseItem = {
  label: string;
  emphasis?: boolean;
};

interface MenuCourseProps {
  title: string;
  items: Array<string | MenuCourseItem>;
  panel?: 'accent' | 'plain';
  layout?: 'stack' | 'grid';
  tone?: 'light' | 'muted';
}

const toneClass = {
  light: 'text-gray-200',
  muted: 'text-gray-300',
} as const;

export default function MenuCourse({
  title,
  items,
  panel = 'plain',
  layout = 'stack',
  tone = 'light',
}: MenuCourseProps) {
  const color = toneClass[tone];
  const listClass =
    layout === 'grid'
      ? `grid grid-cols-2 gap-3 text-lg leading-relaxed ${color} md:grid-cols-3`
      : `space-y-3 text-lg leading-relaxed ${color}`;

  return (
    <div>
      <h3 className="menu-section-title">{title}</h3>
      <div className={panel === 'accent' ? 'menu-panel-accent' : 'menu-panel'}>
        <div className={listClass}>
          {items.map((item) => {
            const entry = typeof item === 'string' ? { label: item } : item;
            return (
              <p key={entry.label} className={entry.emphasis ? 'font-semibold' : undefined}>
                {entry.label}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

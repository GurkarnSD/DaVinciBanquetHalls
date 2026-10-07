type DinnerSide = {
  label: string;
  span?: boolean;
};

function DietChoiceGrid({
  vegetarian,
  nonVegetarian,
  className = 'grid gap-6 md:grid-cols-2',
}: {
  vegetarian: string;
  nonVegetarian: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div>
        <h4 className="mb-3 text-xl font-semibold text-white">Vegetarian</h4>
        <p className="text-lg leading-relaxed text-gray-200">{vegetarian}</p>
      </div>
      <div>
        <h4 className="mb-3 text-xl font-semibold text-white">Non-Vegetarian</h4>
        <p className="text-lg leading-relaxed text-gray-200">{nonVegetarian}</p>
      </div>
    </div>
  );
}

export function PackageAppetizers({
  vegetarian,
  nonVegetarian,
  note,
}: {
  vegetarian: string;
  nonVegetarian: string;
  note?: string;
}) {
  return (
    <div>
      <h3 className="menu-section-title">Appetizers</h3>
      <div className="menu-panel-accent">
        <DietChoiceGrid
          vegetarian={vegetarian}
          nonVegetarian={nonVegetarian}
          className={note ? 'mb-4 grid gap-6 md:grid-cols-2' : 'grid gap-6 md:grid-cols-2'}
        />
        {note && (
          <div className="border-t border-[#C9A961]/30 pt-4 text-center">
            <p className="text-lg leading-relaxed text-gray-200">{note}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export function PackageDinner({
  vegetarian,
  nonVegetarian,
  sides,
  columns,
}: {
  vegetarian: string;
  nonVegetarian: string;
  sides: DinnerSide[];
  columns: 3 | 4;
}) {
  const sideGridClass =
    columns === 4
      ? 'mt-4 grid grid-cols-2 gap-3 border-t border-[#C9A961]/20 pt-4 md:grid-cols-4'
      : 'mt-4 grid grid-cols-2 gap-3 border-t border-[#C9A961]/20 pt-4 md:grid-cols-3';
  const spanClass = columns === 4 ? 'md:col-span-4' : 'md:col-span-3';

  return (
    <div>
      <h3 className="menu-section-title">Dinner</h3>
      <div className="rounded-xl border border-[#C9A961]/20 bg-linear-to-br from-[#C9A961]/10 to-[#E5C97A]/10 p-6">
        <div className="space-y-4">
          <DietChoiceGrid vegetarian={vegetarian} nonVegetarian={nonVegetarian} />
          <div className={sideGridClass}>
            {sides.map((side) => (
              <p
                key={side.label}
                className={
                  side.span
                    ? `text-lg leading-relaxed text-gray-200 ${spanClass}`
                    : 'text-lg leading-relaxed text-gray-200'
                }
              >
                {side.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CenteredMenuCourse({ title, lines }: { title: string; lines: string[] }) {
  return (
    <div>
      <h3 className="menu-section-title">{title}</h3>
      <div className="menu-panel">
        <div className="space-y-3 text-center text-lg leading-relaxed text-gray-200">
          {lines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

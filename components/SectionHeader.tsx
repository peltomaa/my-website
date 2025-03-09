interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="flex justify-between mb-8 flex-col gap-1 md:flex-row">
      <h2 className="text-4xl font-bold">{title}</h2>
      <p className="text-gray-400 max-w-md lg:text-right">{description}</p>
    </div>
  );
}

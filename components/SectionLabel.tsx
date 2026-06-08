interface SectionLabelProps {
  children: React.ReactNode;
  color?: 'gold' | 'forest' | 'parchment';
}

export default function SectionLabel({ children, color = 'gold' }: SectionLabelProps) {
  const colorMap = {
    gold: 'text-[#C4924A]',
    forest: 'text-[#1C3A2B]',
    parchment: 'text-[#F2EDE4]/60',
  };

  return (
    <div className="flex items-center gap-4 justify-center mb-4">
      <div className="h-px w-10 bg-[#C4924A]/60" />
      <span
        className={`text-xs tracking-[0.25em] uppercase ${colorMap[color]}`}
        style={{ fontFamily: 'Jost, sans-serif', fontWeight: 400 }}
      >
        {children}
      </span>
      <div className="h-px w-10 bg-[#C4924A]/60" />
    </div>
  );
}

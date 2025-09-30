import { Section } from "../../ui/section";

interface StatItemProps {
  label?: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

export default function Stats({
  items = [
    {
      label: "Modules",
      value: 15,
      suffix: "+",
      description: "Specialized tools for every workflow",
    },
    {
      label: "Property Types",
      value: 8,
      suffix: "+",
      description:
        "Text, Number, Date, Select, Relation, Formula, Media & more",
    },
    {
      label: "View Types",
      value: 6,
      description: "Table, Board, Calendar, Timeline, List, Gallery",
    },
    {
      label: "Status",
      value: "Portfolio",
      description: "Development showcase project",
    },
  ],
  className,
}: StatsProps) {
  // Debug log to validate current stats data
  console.log("Stats component rendering with items:", items);

  // Commented out stats section until real data is available
  /*
  return (
    <Section className={className}>
      <div className="container mx-auto max-w-[960px]">
        {items !== false && items.length > 0 && (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 text-center"
              >
                {item.label && (
                  <div className="text-muted-foreground text-sm font-semibold">
                    {item.label}
                  </div>
                )}
                <div className="flex items-baseline gap-2">
                  <div className="from-foreground to-brand bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl">
                    {item.value}
                  </div>
                  {item.suffix && (
                    <div className="text-brand text-2xl font-semibold">
                      {item.suffix}
                    </div>
                  )}
                </div>
                {item.description && (
                  <div className="text-muted-foreground text-sm font-medium">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
  */

  // Return null to render nothing
  return null;
}

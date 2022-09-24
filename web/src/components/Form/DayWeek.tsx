import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface DayWeekProps {
  value: string;
  title: string;
  label: string;
  selected: boolean;
}

export function DayWeek({ value, title, label, selected }: DayWeekProps) {
  return (
    <ToggleGroup.Item
      value={value}
      title={title}
      className={`md:w-8 md:h-8 w-6 h md:text-base-6 rounded text-xs ${
        selected ? "bg-violet-500" : "bg-zinc-900"
      }`}
    >
      {label}
    </ToggleGroup.Item>
  );
}

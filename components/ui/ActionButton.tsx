import { LucideIcon } from "lucide-react";

interface ActionButtonProps {
  icon: LucideIcon;
  label: string;
  iconColor?: string;
  onClick?: () => void;
}

export default function ActionButton({
  icon: Icon,
  label,
  iconColor,
  onClick,
}: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex h-10 w-10 md:w-auto
        items-center justify-center md:justify-start
        gap-2
        rounded-xl
        border border-[#E5E7EB]
        bg-white
        md:px-4
        text-[14px]
        font-medium
        text-[#374151]
        shadow-sm
        transition-all
        hover:border-[#CBD5E1]
        hover:bg-[#F8FAFC]
        hover:shadow-md
        active:scale-[0.98]
      "
    >
      <Icon size={16} className={iconColor} />

      <span className="hidden md:inline">{label}</span>
    </button>
  );
}

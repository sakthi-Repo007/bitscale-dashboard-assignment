import {
  House,
  LayoutGrid,
  PlaySquare,
  Workflow,
  BookOpen,
  Settings,
} from "lucide-react";

import Image from "next/image";

const menuItems = [
  {
    icon: House,
    label: "Home",
  },
  {
    icon: LayoutGrid,
    label: "My Dashboard",
    active: true,
  },
  {
    icon: PlaySquare,
    label: "Playbooks",
  },
  {
    icon: Workflow,
    label: "Integrations",
  },
];

const otherItems = [
  {
    icon: BookOpen,
    label: "Documentation",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

interface SidebarProps {
  isOpen?: boolean;
}

export default function Sidebar({ isOpen = false }: SidebarProps) {
  return (
    <aside
      className={`
    fixed left-0 top-0 z-50 h-screen w-[235px]
    border-r border-[#E5E7EB] bg-white
    transition-transform duration-300
    lg:relative lg:translate-x-0
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
  `}
    >
      {/* Logo */}
      <div className="flex h-14.5 items-center border-b border-[#E5E7EB] px-5">
        <div className="relative h-8 w-[110px] md:h-10 md:w-[140px]">
          <Image
            src="/avatars/bitscale-logo.png"
            alt="Bitscale"
            fill
            priority
            className="object-contain"
          />
        </div>
      </div>

      {/* Workspace */}
      <div className="border-b border-[#E5E7EB] px-5 py-4">
        <div className="flex items-center">
          <div className="relative flex">
            <Image
              src="/avatars/avatar1.jpg"
              alt="User 1"
              width={32}
              height={32}
              className="rounded-full border-2 border-white object-cover"
            />

            <Image
              src="/avatars/avatar2.jpg"
              alt="User 2"
              width={32}
              height={32}
              className="-ml-2 rounded-full border-2 border-white object-cover"
            />
          </div>

          <p className="ml-3 text-[15px] font-medium text-[#1F2937]">
            GTM Spaces
          </p>
        </div>
      </div>

      {/* Main Menu */}
      <div className="flex-1 p-4">
        <p className="mb-2 text-[13px] font-medium text-[#9CA3AF]">Home</p>

        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className={`flex h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-[15px] transition cursor-pointer ${
                  item.active
                    ? "bg-[#F3F7FF] text-[#2563EB]"
                    : "text-[#4B5563] hover:bg-[#F9FAFB] hover:text-[#111827]"
                }`}
              >
                <Icon size={18} />

                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <p className="mb-2 mt-8 text-[13px] font-medium text-[#9CA3AF]">
          Other
        </p>

        <div className="space-y-1">
          {otherItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-gray-600 transition hover:bg-gray-100"
              >
                <Icon size={18} />

                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full border-t border-[#E5E7EB] px-5 py-4">
        <p className="text-[15px] font-semibold text-[#374151]">Bitscale</p>

        <p className="text-[13px] text-[#6B7280]">Get Support at Bitscale</p>
      </div>
    </aside>
  );
}

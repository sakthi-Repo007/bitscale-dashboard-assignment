"use client";
import { Plus, Building2, Users } from "lucide-react";
import FindPeopleModal from "../modals/FindPeopleModal";
import { useState } from "react";
import NewGridModal from "../modals/NewGridModal";
import ActionButton from "../ui/ActionButton";
import Image from "next/image";

export default function Header({ setGrids, setShowNewGrid, showNewGrid }) {
  const [showFindPeople, setShowFindPeople] = useState(false);
  return (
    <>
      <header className="flex h-14.5 items-center justify-between border-b border-[#E5E7EB] px-5">
        <div className="flex items-center">
          <Image
            src="/avatars/bitscale-logo.png"
            alt="Bitscale"
            width={100}
            height={28}
            className="lg:hidden h-auto"
          />
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          {/* Credits */}

          <div className="hidden sm:flex h-8 items-center gap-2 rounded-full bg-[#EEF7F0] px-3">
            <div className="h-2 w-2 rounded-full bg-green-500" />

            <span className="text-[14px] font-medium text-[#2F855A]">
              450000/550000
            </span>

            <button className="rounded-full bg-[#43A047] px-3 py-1 text-[12px] font-medium text-white">
              Booster Plan
            </button>
          </div>

          <ActionButton icon={Building2} label="Find Companies" />

          {/* Find People */}

          <ActionButton
            icon={Users}
            label="Find People"
            onClick={() => setShowFindPeople(true)}
          />

          {/* New Grid */}
          <button
            className="flex h-9 items-center gap-2 rounded-lg bg-[#111827] px-3 md:px-4 text-[14px] font-medium text-white transition hover:bg-[#1F2937]"
            onClick={() => setShowNewGrid(true)}
          >
            <Plus size={16} />
            <span className="hidden sm:inline">New Grid</span>
          </button>

          {/* Avatar */}
          <Image
            src="/avatars/tim-cook.jpg"
            alt="Profile"
            width={36}
            height={36}
            className="h-8 w-8 md:h-9 md:w-9 rounded-full ring-1 ring-gray-200 object-cover"
          />
        </div>
      </header>
      <FindPeopleModal
        isOpen={showFindPeople}
        onClose={() => setShowFindPeople(false)}
      />
      <NewGridModal
        isOpen={showNewGrid}
        onClose={() => setShowNewGrid(false)}
        onCreate={(newGrid) => setGrids((prev) => [newGrid, ...prev])}
      />
    </>
  );
}

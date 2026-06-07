"use client";

import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-2xl",
  lg: "max-w-4xl",
  xl: "max-w-6xl",
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "lg",
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/30 backdrop-blur-sm p-4">
      <div
        className={`w-full ${sizeClasses[size]} max-h-[90vh] overflow-hidden rounded-2xl bg-white shadow-xl`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-4 md:px-5">
          <h2 className="text-xl font-semibold tracking-tight text-[#1F2937]">
            {title}
          </h2>

          <button
            onClick={onClose}
            className="rounded-md p-1 hover:bg-gray-100 text-[#1F2937]"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[calc(90vh-72px)] overflow-y-auto p-4 md:p-5">
          {children}
        </div>
      </div>
    </div>
  );
}

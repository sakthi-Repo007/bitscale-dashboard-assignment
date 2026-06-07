"use client";

import { useEffect, useState } from "react";
import Modal from "../ui/Modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (grid: unknown) => void;

  editGrid?: unknown;
  onUpdate?: (grid: unknown) => void;
}

export default function NewGridModal({
  isOpen,
  onClose,
  onCreate,
  editGrid,
  onUpdate,
}: Props) {
  const [name, setName] = useState("");
  const handleCreate = () => {
    if (!name.trim()) return;

    if (editGrid) {
      onUpdate?.({
        ...editGrid,
        name,
      });
    } else {
      onCreate({
        id: Date.now(),
        name,
        owner: "Tim Cook",
        records: 0,
        updated: "Just now",
        starred: false,
      });
    }

    setName("");
    onClose();
  };

  useEffect(() => {
    setName(editGrid?.name || "");
  }, [editGrid]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={editGrid ? "Edit Grid" : "Create New Grid"}
      size="md"
    >
      <div className="space-y-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Grid name"
          className="w-full rounded-lg border border-gray-300 p-3 text-gray-400"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="rounded-lg border px-4 py-2">
            Cancel
          </button>

          <button
            onClick={handleCreate}
            className="rounded-lg bg-slate-900 px-4 py-2 text-white"
          >
            {editGrid ? "Save Changes" : "Create Grid"}
          </button>
        </div>
      </div>
    </Modal>
  );
}

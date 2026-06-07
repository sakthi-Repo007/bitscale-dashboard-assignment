import { ListFilter } from "lucide-react";

function GridEmptyState({ setShowNewGrid }) {
  return (
    <>
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50">
        <ListFilter size={28} className="text-blue-600" />
      </div>

      <h3 className="text-lg font-semibold text-[#111827]">
        No grids created yet
      </h3>

      <p className="mt-2 text-sm text-[#6B7280]">
        Create your first grid to get started
      </p>

      <button
        onClick={() => setShowNewGrid(true)}
        className="mt-6 rounded-lg bg-[#111827] px-4 py-2 text-white"
      >
        Create Grid
      </button>
    </>
  );
}

export default GridEmptyState;

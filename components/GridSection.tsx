// import { initialGrids } from "@/data/initialGrids";
import NewGridModal from "./modals/NewGridModal";
import { useState } from "react";
import GridSearch from "./Grid/GridSearch";
import GridEmptyState from "./Grid/GridEmptyState";
import GridTable from "./Grid/GridTable";

interface GridSectionProps {
  grids: unknown[];
}
export default function GridSection({
  grids,
  setShowNewGrid,
  showNewGrid,
  setGrids,
}: unknown) {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [editingGrid, setEditingGrid] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGrids = grids.filter(
    (grid) =>
      grid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      grid.owner.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (grids.length === 0) {
    return (
      <section className="mt-8">
        <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white">
          <GridEmptyState setShowNewGrid={setShowNewGrid} />
        </div>
      </section>
    );
  }
  return (
    <section className="mt-8">
      {/* Top Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Tabs */}
        <div className="flex shrink-0 gap-8">
          <button className="border-b-2 border-blue-600 pb-3 font-medium text-blue-600">
            My Grids
          </button>

          <button className="pb-3 text-gray-500">Starred</button>
        </div>

        {/* Search */}
        <GridSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Table Placeholder */}
      <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="p-6 text-gray-500">
          <div className="w-full overflow-x-auto">
            <GridTable
              filteredGrids={filteredGrids}
              openMenuId={openMenuId}
              setOpenMenuId={setOpenMenuId}
              setGrids={setGrids}
              setEditingGrid={setEditingGrid}
            />
          </div>
        </div>
        <>
          <NewGridModal
            isOpen={showNewGrid}
            onClose={() => setShowNewGrid(false)}
            onCreate={(newGrid) => setGrids((prev) => [newGrid, ...prev])}
          />

          <NewGridModal
            isOpen={!!editingGrid}
            editGrid={editingGrid}
            onClose={() => setEditingGrid(null)}
            onCreate={() => {}}
            onUpdate={(updatedGrid) => {
              setGrids((prev) =>
                prev.map((item) =>
                  item.id === updatedGrid.id ? updatedGrid : item,
                ),
              );

              setEditingGrid(null);
            }}
          />
        </>
      </div>
    </section>
  );
}

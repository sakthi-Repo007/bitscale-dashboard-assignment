import React from "react";
import GridRow from "./GridRow";
import { MoreHorizontal, Star } from "lucide-react";

export default function GridTable({
  filteredGrids,
  setOpenMenuId,
  openMenuId,
  setGrids,
  setEditingGrid,
}) {
  return (
    <>
      <table className="min-w-[700px] w-full">
        <thead>
          <GridRow />
        </thead>

        <tbody>
          {filteredGrids.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-10 text-center text-gray-500">
                No matching grids found
              </td>
            </tr>
          ) : (
            filteredGrids.map((grid) => (
              <tr
                key={grid.id}
                className="cursor-pointer border-b border-gray-100 transition-colors duration-200 hover:bg-[#F8FAFC]"
              >
                <td className="px-4 md:px-6 py-4">
                  <div className="flex w-full items-center gap-3 md:w-auto">
                    <Star
                      size={16}
                      className={
                        grid.starred
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />

                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded-md bg-blue-100" />

                      <span className="font-medium text-gray-900">
                        {grid.name}
                      </span>
                    </div>
                  </div>
                </td>

                <td className="px-4 md:px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                      {grid.owner
                        .split(" ")
                        .map((word: any[]) => word[0])
                        .join("")
                        .slice(0, 2)}
                    </div>

                    <span className="text-gray-600">{grid.owner}</span>
                  </div>
                </td>

                <td className="px-4 md:px-6 py-4 text-gray-600">
                  {grid.records.toLocaleString()}
                </td>

                <td className="px-4 md:px-6 py-4 text-gray-600">
                  {grid.updated}
                </td>
                <td className="relative px-4 md:px-6 py-4">
                  <button
                    onClick={() =>
                      setOpenMenuId(openMenuId === grid.id ? null : grid.id)
                    }
                  >
                    <MoreHorizontal
                      size={18}
                      className="text-gray-400 hover:text-gray-700"
                    />
                  </button>

                  {openMenuId === grid.id && (
                    <div className="absolute right-6 top-12 z-50 w-32 rounded-lg border border-gray-200 bg-white shadow-lg">
                      <button
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                        onClick={() => {
                          setEditingGrid(grid);
                          setOpenMenuId(null);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => {
                          setGrids((prev) =>
                            prev.filter((item) => item.id !== grid.id),
                          );

                          setOpenMenuId(null);
                        }}
                        className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

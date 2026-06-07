"use client";
import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import WelcomeSection from "@/components/WelcomeSection";
import DashboardCards from "@/components/DashboardCards";
import GridSection from "@/components/GridSection";
import { useState } from "react";
import { initialGrids } from "@/data/initialGrids";

// const initialGrids = {};

export default function Home() {
  const [grids, setGrids] = useState(initialGrids);
  const [showNewGrid, setShowNewGrid] = useState(false);
  return (
    <main className="flex min-h-screen bg-white">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          setGrids={setGrids}
          setShowNewGrid={setShowNewGrid}
          showNewGrid={showNewGrid}
        />

        <div className="p-4 md:p-6">
          <WelcomeSection />
          <DashboardCards />
          <GridSection
            grids={grids}
            setShowNewGrid={setShowNewGrid}
            showNewGrid={showNewGrid}
            setGrids={setGrids}
          />
        </div>
      </div>
    </main>
  );
}

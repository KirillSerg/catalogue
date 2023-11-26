'use client'

import { useEffect, useState } from "react";
import PositionInfo from "./(components)/PositionInfo";
import PositionList from "./(components)/PositionList";

export interface PositionType {
  name: string;
  product: boolean;
  price: boolean;
  analytics: boolean;
  duel: boolean;
  claims: boolean;
  purchase: boolean;
  hr: boolean;
  assign_positions: boolean;
  dismiss: boolean;
}

const Position = () => {
  const [positions, setPosition] = useState<PositionType[] | []>([])
  const [activePosition, setActivePosition] = useState<PositionType | null>(null)

  useEffect(() => {
    const localPositions = JSON.parse(localStorage.getItem("positions") || "[]");
    if (localPositions.length > 0) {
      setPosition(localPositions)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("positions", JSON.stringify(positions))
    setActivePosition(null)
  }, [positions])
  
  return (
    <main className="flex gap-4 flex-row h-full">
      <PositionList
        positions={positions}
        activePosition={activePosition}
        setActivePosition={setActivePosition}
        styles="flex-1"
      />
      <PositionInfo
        positions={positions}
        styles="w-[66%]"
        activePosition={activePosition}
        setPosition={setPosition}
      />
    </main>
  )
};

export default Position;
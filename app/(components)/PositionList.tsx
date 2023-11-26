import { Dispatch, SetStateAction } from "react";
import { tokens } from "../(assets)/designTokens";
import { PositionType } from "../page";
import PositionBlock from "./PositionBlock";

const colors = tokens.colors;

interface Props {
  styles: string;
  positions: PositionType[] | [];
  activePosition: PositionType | null;
  setActivePosition: Dispatch<SetStateAction<PositionType | null>>
}

const PositionList = ({ styles, positions, activePosition, setActivePosition }: Props) => {
  const handleCreate = (e: any) => {
    setActivePosition(null)
    e.preventDefault();
  };

  return (
    <section className={`${styles} flex flex-col justify-between pb-4`}>
      <div className="max-h-[608px] overflow-y-auto scroll-smooth scrollbar [&>div+div]:mt-2">
        {!!positions.length && positions.map((position) => {
          return <PositionBlock
            key={position.name}
            positionData={position}
            setActivePosition={setActivePosition}
            active={activePosition?.name === position.name}
          />
        })}
      </div>

      <button
        onClick={(e) => handleCreate(e)}
        className={
          `${colors.bg_violet} ${colors.text_white_1} w-full py-[14px] rounded-lg border-2 ${colors.border_white_16}
          text-sm font-semibold drop-shadow-[0_4px_40px_rgba(104,102,234,0.24)]`
        }
      >
        <p className="drop-shadow-[0_4px_8px_rgba(245,245,245,0.24)]">
          Створити нову посаду
        </p>
      </button>
    </section>
  )
}

export default PositionList
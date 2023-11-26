import { Dispatch, SetStateAction } from "react";
import { DotsGroup } from "../(assets)/Icons"
import { tokens } from "../(assets)/designTokens"
import { PositionType } from "../page";

const colors = tokens.colors

interface Props {
  active?: boolean;
  positionData: PositionType;
  setActivePosition: Dispatch<SetStateAction<PositionType | null>>;
}

const PositionBlock = ({active, setActivePosition, positionData}: Props) => {
  return (
    <div
      className={
        `w-full h-20 flex flex-row items-center px-4 gap-4 justify-between cursor-pointer rounded-lg ${colors.bg_black_2}
        ${active && `${colors.border_violet} border-2`}`
      }
      onClick={() => setActivePosition(positionData)}
    >
      <DotsGroup />
      <div className="flex-1 flex flex-row justify-between">
        <div>
          <h6 className={`${colors.text_white_1} text-sm font-semibold pb-0.5`}>{positionData.name}</h6>
          <p className={`${colors.text_gray_1} text-xs font-semibold`}>10 завдань</p>
        </div>
        <p className={`${colors.text_gray_1} text-xs font-medium`}>
          <span className={`${colors.text_yellow} text-xs font-bold`}>
            $98
          </span>
          {" /год"}
        </p>
      </div>
    </div>
  )
}

export default PositionBlock
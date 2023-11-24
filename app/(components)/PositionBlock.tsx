import { DotsGroup } from "../(assets)/Icons"
import { tokens } from "../(assets)/designTokens"

const colors = tokens.colors

interface Props {
  
}

const PositionBlock = () => {
  return (
    <div
      className={
        `w-full h-20 flex flex-row items-center px-4 gap-4 justify-between rounded-lg
        ${colors.bg_black_2}`
      }
    >
      <DotsGroup />
      <div className="flex-1 flex flex-row justify-between">
        <div>
          <h6 className={`${colors.text_white_1} text-sm font-semibold pb-0.5`}>dgfdgdg</h6>
          <p className={`${colors.text_gray_1} text-xs font-semibold`}>10m</p>
        </div>
        <p className={`${colors.text_gray_1} text-xs font-medium`}>
          <span className={`${colors.text_yellow} text-xs font-bold`}>
            $98
          </span>
          {" /hgr"}
        </p>
      </div>
    </div>
  )
}

export default PositionBlock
import { tokens } from "../(assets)/designTokens";
import Button from "./Button";
import PositionBlock from "./PositionBlock";

const colors = tokens.colors;

interface Props {
  styles: string;
}

const PositionList = ({styles}: Props) => {
  return (
    <section className={`${styles}`}>
      <div className="flex flex-col gap-2 mb-2">
        <PositionBlock active={true} />
        <PositionBlock />
        <PositionBlock />
      </div>
      <Button
        title="Створити нову посаду"
        btnStyles={
          //box-shadow: 0px 4px 40px 0px rgba(104, 102, 234, 0.24);
          `${colors.bg_violet} ${colors.text_white_1} w-full py-[14px] rounded-lg border-2 ${colors.border_white_16}
          text-sm font-semibold drop-shadow-[0_4px_40px_rgba(104,102,234,0.24)]`
        }
        txtStyles="drop-shadow-[0_4px_8px_rgba(245,245,245,0.24)]"
      />
    </section>
  )
}

export default PositionList
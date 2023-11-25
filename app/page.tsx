import PositionInfo from "./(components)/PositionInfo";
import PositionList from "./(components)/PositionList";

const Position = () => {
  return (
    <main className="flex gap-4 flex-row h-full">
      <PositionList styles="flex-1"/>
      <PositionInfo styles="w-[66%]"/>
    </main>
  )
};

export default Position;
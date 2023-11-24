import PositionInfo from "./(components)/PositionInfo";
import PositionList from "./(components)/PositionList";

const Position = () => {
  return (
    <main className="flex flex-row ">
      <PositionList />
      <PositionInfo />
    </main>
  )
};

export default Position;
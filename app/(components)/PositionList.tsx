import PositionBlock from "./PositionBlock";

interface Props {
  className: string;
}

const PositionList = ({className}: Props) => {
  return (
    <section className={`${className} flex flex-col gap-2`}>
      <PositionBlock />
      <PositionBlock />
      <PositionBlock />
    </section>
  )
}

export default PositionList
interface Props {
  styles: string;
}

const PositionInfo = ({styles}: Props) => {
  return (
    <section className={`${styles}`}>
      PositionInfo
    </section>
  )
}

export default PositionInfo
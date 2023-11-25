interface Props {
  title: string;
  btnStyles?: string;
  txtStyles?: string;
  onClick?: () => void;
}

const Button = ({title, btnStyles, txtStyles, onClick}: Props) => {
  return (
    <button
      className={`${btnStyles}`}
      onClick={onClick}
    >
      <p className={`${txtStyles}`}>
        {title}
      </p>
    </button>
  )
}

export default Button
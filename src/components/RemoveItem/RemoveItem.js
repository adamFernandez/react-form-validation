import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../styles/Container.styled";

const RemoveItem = ({ fade, onClick, color, size, id, width }) => {
  return (
    <Container addToList className={fade ? 'fadeout' : 'fadein'} id={id} width={width} >
      <FontAwesomeIcon id={id} onClick={onClick} className="plus" icon="minus-circle" color={color ? color : "white"} size={size ? size : "8x"} />
    </Container>
  )
}

export default RemoveItem;
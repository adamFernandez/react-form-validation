import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../styles/Container.styled";

const AddItem = ({ fade, onClick, color, size, label, width }) => {
  return (
    <Container addToList className={fade ? 'fadeout' : 'fadein'} id={label} width={width} >
      <FontAwesomeIcon id={label} onClick={onClick} className="plus" icon="plus-circle" color={color ? color : "white"} size={size ? size : "8x"} />
    </Container>
  )
}

export default AddItem;
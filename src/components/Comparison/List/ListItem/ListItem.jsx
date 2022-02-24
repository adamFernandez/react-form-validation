import { StyledListItem } from "./ListItem.styled"

const ListItem = ({ text, src }) => {
  return (
    <StyledListItem>
      {src && <img src={src} alt="" width="50%" />}
      {text}
    </StyledListItem>
  )
}

export default ListItem;
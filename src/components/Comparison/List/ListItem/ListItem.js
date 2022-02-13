import { StyledListItem } from "./ListItem.styled"

const ListItem = ({ text, src }) => {
  return (
    <StyledListItem>
      <img src={src} alt="" width="50%" />
      <p>{text}</p>
    </StyledListItem>
  )
}

export default ListItem;
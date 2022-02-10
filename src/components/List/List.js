import ListItem from "./ListItem/ListItem";
import { StyledList } from "./List.styled";

const List = () => {
  return (
    <StyledList>
      <ListItem text="Water resistant" />
      <ListItem text="Battery life" />
      <ListItem text="Price" />
      <ListItem text="Weight" />
      <ListItem text="" />
    </StyledList>
  )
}

export default List
import ListItem from "./ListItem/ListItem";
import { StyledList } from "./List.styled";

const List = ({ item }) => {
  return (
    <StyledList>
      <ListItem text={item.title} />
      <ListItem text={item.storage} />
      <ListItem text={item.waterresistant ? 'yes' : 'no'} />
      <ListItem text={item.properties.os} />
      <ListItem text={item.properties.year} />
      <ListItem text={item.properties.colours.map(c => <span>{c}</span>)} />
      <ListItem text={item.communication.fiveg ? '5G' : 'X'} />
      <ListItem text={item.communication.fivegfreq} />
      <ListItem text={item.camera.back} />
      <ListItem text={item.camera.front} />
      <ListItem text={item.camera.resolution} />
      <ListItem text={item.camera.resolutionfront} />
      <ListItem text={item.features.resistant.water ? 'True' : 'X'} />
      <ListItem text={item.features.resistant.ip} />
      <ListItem text={item.features.resistant.shock ? 'True' : 'X'} />
    </StyledList>
  )
}

export default List
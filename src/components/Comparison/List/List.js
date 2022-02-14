import ListItem from "./ListItem/ListItem";
import { StyledList } from "./List.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({ item }) => {
  return (
    <StyledList>
      <ListItem className="title" text={item.title} src={item.image.src} />
      <ListItem text={item.storage} />
      <ListItem text={item.properties.os} />
      <ListItem text={item.properties.year} />
      <ListItem text={item.properties.colours.map((c, i) => <span className="colour">{c}{ i < item.properties.colours.length-1 && ', '}</span>)} />
      <ListItem text={item.communication.fiveg ? <FontAwesomeIcon className="true" icon="check-circle"/> :  <FontAwesomeIcon className="false" icon="times-circle"/> } />
      <ListItem text={item.communication.fivegfreq} />
      <ListItem text={item.camera.back} />
      <ListItem text={item.camera.front} />
      <ListItem text={item.camera.resolution} />
      <ListItem text={item.camera.resolutionfront} />
      <ListItem text={item.features.resistant.water ? <FontAwesomeIcon className="true" icon="check-circle"/> : <FontAwesomeIcon className="false" icon="times-circle"/> } />
      <ListItem text={item.features.resistant.ip} />
      <ListItem text={item.features.resistant.shock ? <FontAwesomeIcon className="true" icon="check-circle"/> : <FontAwesomeIcon className="false" icon="times-circle"/> } />
    </StyledList>
  )
}

export default List
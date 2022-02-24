import { List, ListItem } from './List/index';
import { StyledList } from './List/List.styled';
import { Container } from '../styles/Container.styled';

const Comparison = ({ compareData, handleQuantity, resetQuantities, removeItem, totals }) => {
  
  return (
    <Container table>
      { compareData.length === 0 && <h2>No Items to compare.</h2>}
      { compareData.length > 0 && 
          <StyledList header>
            <ListItem text="Item"/>
            <ListItem text="Storage" />
            <ListItem text="Operative System" />
            <ListItem text="Year" />
            <ListItem text="Colours" />
            <ListItem text="5G" />
            <ListItem text="5G Frequency" />
            <ListItem text="Back Camera Number" />
            <ListItem text="Front Camera Number" />
            <ListItem text="Camera Resolution" />
            <ListItem text="Camera Resolution(front)" />
            <ListItem text="Water Resistant" />
            <ListItem text="IP Type" />
            <ListItem text="Shock Resistant" />
          </StyledList>
      }
      { compareData.length > 0 &&
          compareData.map(item => 
            <List key={item.id} item={item} />
            )
      }
      
    </Container>
  )
}

export default Comparison;

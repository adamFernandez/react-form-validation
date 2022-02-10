import List from './List/List';
import { Container } from '../styles/Container.styled';

const Comparison = ({ compareData, handleQuantity, resetQuantities, removeItem, totals }) => {
  return (
    <Container table>
      
      { compareData.length === 0 && <h2>No Items to compare.</h2> }
      { compareData.length > 0 && compareData.map(item => 
        <List key={item.id} item={item}/>
      )}
    </Container>
  )
}

export default Comparison;
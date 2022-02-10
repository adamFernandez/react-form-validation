import Table from './Table/Table';
import { Container } from '../styles/Container.styled';

const Comparison = ({ compareData, handleQuantity, resetQuantities, removeItem, totals }) => {
  return (
    <Container table>
      <Table compareData={compareData} />
    </Container>
  )
}

export default Comparison;
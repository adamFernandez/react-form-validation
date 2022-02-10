import { StyledTable } from './Table.styled';
import { Tr, Th, Td } from './index';

const Table = ({ compareData }) => {
  return (
    <StyledTable>
        <Tr>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>Weight</Th>
          <Th>Battery</Th>
          <Th>5G</Th>
        </Tr>  
        <Tr>
      {compareData.map(item => 
        <>
          <Td>{item.name}</Td>
          <Td>{item.name}</Td>
          <Td>{item.name}</Td>
          <Td>{item.name}</Td>
          <Td>{item.name}</Td>
        </>
          )}
        </Tr>
    </StyledTable>
  )
}

export default Table
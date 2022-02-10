import Item from './Item/Item';
import { StyledItems } from './Items.styled';

const Items = ({ compareData, handleQuantity, removeItem }) => {
    return (
        <StyledItems>
            {compareData.length === 0 && <p>No Items to compare.</p>}
            {compareData.map(item => 
                <Item key={item.id} item={item} handleQuantity={handleQuantity} removeItem={removeItem} />
            )}  
        </StyledItems>
    )
}

export default Items;
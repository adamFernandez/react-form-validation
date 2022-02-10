import { Container } from '../../components/styles/Container.styled';
import Items from "./Items/Items";
import List from '../List/List';
import ListItem from "../List/ListItem/ListItem";
// import Totals from "./Totals/Totals";

const Basket = ({ compareData, handleQuantity, resetQuantities, removeItem, totals }) => {
    return (
      <Container>
        <Items compareData={compareData} handleQuantity={handleQuantity} removeItem={removeItem} />
        {/* <Totals total={totals} resetQuantities={resetQuantities} /> */}
      </Container>
    )
}

export default Basket

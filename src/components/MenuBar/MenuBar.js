import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { StyledMenuBar } from "./MenuBar.styled";

const MenuBar = ({ basketData = 0, toBasket, toProducts, onProducts }) => {

  const [currency, setCurrency] = useState('USD');
    
    const switchCurrency = (e) => {
      e.preventDefault();
      console.log(e.target.value);
      setCurrency(e.target.value);
    }
    return (
			<>
				<StyledMenuBar>
          <div className="form" onClick={toProducts}>Form</div>
          <div className="movies" onClick={toProducts}>Movies</div>
          <div className="card" onClick={toProducts}>Cards</div>
          <div className="currency_symbols">
            <FontAwesomeIcon className="symbol" value="GBP" icon="pound-sign" size="lg" onClick={(e) => switchCurrency(e)} />
            <FontAwesomeIcon className="symbol" value="USA" icon="dollar-sign" size="lg" onClick={(e) => switchCurrency(e)} />
            <FontAwesomeIcon className="symbol" value="EUR" icon="euro-sign" size="lg" onClick={() => switchCurrency(3)} />
          </div>
          <select id="currency" className="currency" name="currency">
            <option>Select currency</option>
            <option value="GBP">British Pound Sterling</option>
            <option value="EUR">Euro</option>
            {/* <option value="USD" {currency === "USD" ? 'selected' : ''}>US Dollar</option> */}
          </select>
          <FontAwesomeIcon className="icon" icon="shopping-bag" size="2x" onClick={toBasket} />
          {/* {1 > 0 && <span className="counter">2</span>} */}
        </StyledMenuBar>

				{/* <div className="sub_menu">
					<span className="sub_menu_item">{onProducts ? 'Products' : 'Your Basket'}</span>
				</div> */}
			</>
    )
}

export default MenuBar

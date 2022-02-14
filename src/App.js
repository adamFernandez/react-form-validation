import { useEffect, useState } from 'react';



// import { Container, Wrapper } from "./components/styles/index";
import { capitalize } from './components/styles/Functions';

import { Container } from './components/styles/Container.styled';
import { Wrapper } from './components/styles/Wrapper.styled';
import { GlobalStyles } from './components/styles/Global';

import "./FontAwesomeIcons";
import logo from "./img/netflix_2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Products from "./components/Products/Products";
import Form from "./components/Form/Form";
import MenuBar from "./components/MenuBar/MenuBar";
import Listing  from "./components/Listing/Listing";
import Movies from './components/Movies/Movies';
import Basket from './components/Basket/Basket';
import Comparison from './components/Comparison/Comparison';
function App() {
  const defaultValues = { username: '', email: '', password: ''};
  const [formValues, setFormValues] = useState(defaultValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  
  // setting the data state for the different pages
  // const [data, setData] = useState("");
  const [listing, setListing] = useState("");
  const [movies, setMovies] = useState("");
  const [products, setProducts] = useState("");
  const [page, setPage] = useState("form");

  // compare data state
  const [compareData, setCompareData] = useState([]);


  // connecting to db
  const url = "http://localhost:3005/";
  const fetchData = async (page) => {
    try {
      const response = await fetch(`${url}${page}`);
      const json = await response.json();
      var newSet = `set${capitalize(page)}`;
      eval(newSet)(json);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {  
    fetchData('listing');
    fetchData('movies');
    fetchData('products');
  },[]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name] : value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  }

  const changeStatus = (item) => {
    const newStatus = item.status === 'active' ? 'expired' : 'active';
    const currentItem = listing.find(i => i.id === item.id);
    setListing(
      listing.map(i => i.id === item.id
        ? {...currentItem, status: newStatus } 
        : i
      )
    )
  }

  // Add product to compare
  const addToCompare = (product) => {
    console.log(product.id);
    const exist = compareData.find(item => item.id === product.id);
    product.quantity = 1;
    exist  
      ? setCompareData(compareData.map(item => item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item))
      : setCompareData([...compareData, product]);		
	}

  // show a component depending on menu clicked 
  const show = (e) => {
    console.log(e.target.className);
    e.target.className === 'counter' 
      ? setPage('compare') 
      : setPage(e.target.innerText.toLowerCase());
  }

  useEffect(() => {
    if (Object(formErrors).length === 0 && isSubmit) {  
      console.log(formValues);
    }
  },[formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i; // valid email
    
    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be longer than 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password must be shorter than 10 characters!";
    }
    
    return errors;
  }

  return (
    <Wrapper>
      <GlobalStyles />
      {/* Container showing success on 0 errors or the input values on the Form component*/}
      {/* <Container border='none' mg='0' pd='.1em'>
        {Object.keys(formErrors).length === 0 && isSubmit 
          ? <p>Signed in Successfully</p>
          : <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        }
      </Container> */}      
      <MenuBar compareData={compareData} show={show}/>
      {page === 'form' && 
        <Container>        
          <Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} />
        </Container>}
      {page === 'movies' && movies &&
      <>
        <h1 className="title">Movies</h1>
      <Wrapper auto>
          <Movies data={movies} logo={logo} />
      </Wrapper>
      <Wrapper>
          <Movies data={movies} logo={logo} />             
      </Wrapper>
      </>
      }
      { page === 'products' && products &&
      <>
        <h1 className="title">Products</h1>
        <Wrapper auto>
          <Products data={products} addToCompare={addToCompare} />
        </Wrapper>           
      </>
      }
      {
        page === 'listing' && listing &&
        <>
          <h1 className='title'>Listing</h1>
          <Wrapper>
            <Listing data={listing} changeStatus={changeStatus} />
          </Wrapper>
        </>
      }
      {
        page === 'compare' &&
        <>
          <h2 className='title'>Comparison</h2>
          <Wrapper>
            <Basket compareData={compareData} />
          </Wrapper>
          <Wrapper row>
            <Comparison compareData={compareData} />
          </Wrapper>
        </>
      }
    </Wrapper>
  );
}

export default App;

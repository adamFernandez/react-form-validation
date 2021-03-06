import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { capitalize } from './components/styles/Functions';

import { Container } from './components/styles/Container.styled';
import { Wrapper } from './components/styles/Wrapper.styled';
import { GlobalStyles } from './components/styles/GlobalStyles';

import './FontAwesomeIcons';
import logo from "./img/netflix_2.png";

import {
  Products, Form, MenuBar, Listing, Movies, Basket, Comparison, AddItem, AddForm
} from './imports/components';

import Page2 from './components/Products/Form/Pages/Page2/Page2';
import InputField from './components/Products/Form/InputField/InputField';
import { StyledForm } from './components/Products/Form/Form.styled';

function App() {
  const defaultValues = { username: '', email: '', password: '' };
  const [formValues, setFormValues] = useState(defaultValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  // setting the data state for the different pages
  // const [data, setData] = useState("");
  const [listing, setListing] = useState('');
  const [movies, setMovies] = useState('');
  const [products, setProducts] = useState('');
  const [page, setPage] = useState();

  // compare data state
  const [compareData, setCompareData] = useState([]);

  // form items list state
  const [formList, setFormList] = useState([]);

  // connecting to db
  const url = 'http://localhost:3005/';
  const fetchData = async (tab) => {
    try {
      const response = await fetch(`${url}${tab}`);
      const json = await response.json();
      const newSet = `set${capitalize(tab)}`;
      eval(newSet)(json);
    } catch (error) {
      console.log('Error: ', error);
    }
  };

  useEffect(() => {
    fetchData('listing');
    fetchData('movies');
    fetchData('products');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/i; // valid email

    if (!values.username) {
      errors.username = 'Username is required!';
    }

    if (!values.email) {
      errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
      errors.email = 'This is not a valid email format!';
    }

    if (!values.password) {
      errors.password = 'Password is required!';
    } else if (values.password.length < 4) {
      errors.password = 'Password must be longer than 4 characters!';
    } else if (values.password.length > 10) {
      errors.password = 'Password must be shorter than 10 characters!';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const changeStatus = (item) => {
    const newStatus = item.status === 'active' ? 'expired' : 'active';
    const currentItem = listing.find((i) => i.id === item.id);
    setListing(
      listing.map((i) => (i.id === item.id
        ? { ...currentItem, status: newStatus }
        : i)),
    );
  };

  // Add product to compare
  const addToCompare = (product) => {
    console.log(product.id);
    const exist = compareData.find((item) => item.id === product.id);
    product.quantity = 1;
    exist
      ? setCompareData(compareData.map((item) => (item.id === product.id
        ? { ...exist, quantity: exist.quantity + 1 }
        : item)))
      : setCompareData([...compareData, product]);
  };

  // add Item to products
  const addItem = () => {

  };

  // add Item to Form
  const addForm = (e) => {
    setFormList(formList.concat(
      <Container key={`form${formList.length}`}>
        <AddForm />
      </Container>
    ))
  }

  // show a component depending on menu clicked
  const show = (e) => {
    console.log(e.target.className);
    e.target.className === 'counter'
      ? setPage('compare')
      : setPage(e.target.innerText.toLowerCase());
  };

  useEffect(() => {
    if (Object(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }

  }, [formErrors]);

  return (
    <Wrapper>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<MenuBar compareData={compareData} />}>
            <Route
              index
              element={(
                <>
                  <Container><Form header="Sign Form" formValues={formValues} handleChange={handleChange} formErrors={formErrors} handleSubmit={handleSubmit} /></Container>
                  {formList}
                  <AddItem onClick={addForm} />
                </>
              )} />
            <Route path="movies" element={<Wrapper auto><Movies data={movies} logo={logo} /></Wrapper>} />
            <Route path="products/*" element={<Wrapper auto><Products data={products} addToCompare={addToCompare} /></Wrapper>} />
            <Route path="listing" element={<Wrapper><Listing data={listing} changeStatus={changeStatus} /></Wrapper>} />
            <Route
              path="comparison"
              element={(
                <>
                  <Wrapper><Basket compareData={compareData} /></Wrapper>
                  <Wrapper row><Comparison compareData={compareData} /></Wrapper>
                </>
              )}
            />
          </Route>
        </Routes>
      </Router>

      {/* Container showing success on 0 errors or the input values on the Form component */}
      {/* <Container border='none' mg='0' pd='.1em'>
        {Object.keys(formErrors).length === 0 && isSubmit
          ? <p>Signed in Successfully</p>
          : <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        }
      </Container> */}
    </Wrapper>
  );
}

export default App;

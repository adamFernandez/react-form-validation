import { useState } from 'react';

import { Container } from './components/styles/Container.styled';
import { Wrapper } from './components/styles/Wrapper.styled';
import { Button } from './components/styles/Button.styled';
import { GlobalStyles } from './components/styles/Global';

function App() {
  const defaultValues = { username: '', email: '', password: ''};
  const [formValues, setFormValues] = useState(defaultValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues, [name] : value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  }

  const validate = (values) => {
    const errors = {};
    // const regex = \A[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@
    // (?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z;
  }

  return (
    <Wrapper>
      <GlobalStyles />
      <Container border='none' mg='0' pd='0'>
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      </Container>
      
      <Container>
        <h1>Login Form</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            name="username" 
            placeholder='Username'
            value={formValues.username} 
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            name="email" 
            placeholder='youremail@email.com'
            value={formValues.email}
            onChange={handleChange} 
          />
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            name="password" 
            placeholder='password'
            value={formValues.password} 
            onChange={handleChange}
          />
        </form>
        <Button type="submit" onSubmit={handleSubmit}>Submit</Button>
      </Container>      
    </Wrapper>
  );
}

export default App;

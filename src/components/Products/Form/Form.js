import { useState } from 'react';
import { Button, Page1, Page2, Page3, Page4 } from "./index";
import { StyledForm } from './Form.styled';
import { StyledSection } from './Section/Section.styled';
import { Routes, Route } from 'react-router-dom';
import {
  colours, features, materials, communication, sensors, sims, wifis,
} from '../../data/index';

import { useNavigate as navigate } from 'react-router-dom';
import Products from '../Products';

const Form =({ header, formErrors, handleSubmit }) => {

  const [page, setPage] = useState(1);
  
  const addPage = () => {
    
    setPage(page + 1);
    navigate(`/page${page}`);
  }

  const pageBack = () => {
    console.log(page + 1);
    // let p = page;
    // p = p--;
    // setPage(p);
    // navigate(`/page${page}`);
  }
  return (
    <>
      <h1>{header}</h1>
      <StyledForm onSubmit={handleSubmit}>
        <Routes>
            <Route path="/" element={<Page1 header="General" />} />
            <Route path="/page2" element={<Page2 header="Properties" formErrors={formErrors} />} />
            <Route path="/page3" element={<Page3 header="Communication" />} />
            <Route path="/page4" element={<Page4 header="Features" />} />
        </Routes>
      </StyledForm>
      <StyledSection buttons>
        <Button text="Back" type="button" pd=".5em 0" onClick={pageBack} />
        <Button text="Next" type="button" pd=".5em 0" onClick={addPage} />
      </StyledSection>
      {/* <Button text="Submit" type="submit" handleSubmit={handleSubmit} /> */}
    </>
  );
}

export default Form;

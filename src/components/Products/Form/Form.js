import { useEffect, useState } from 'react';
import {
  useNavigate, Routes, Route, Outlet,
} from 'react-router-dom';

import {
  Button, Page1, Page2, Page3, Page4,
} from './index';

import { StyledForm } from './Form.styled';
import { StyledSection } from './Section/Section.styled';

import {
  colours, features, materials, communication, sensors, sims, wifis,
} from '../../data/index';

function Form({
  header, formErrors, handleSubmit, content,
}) {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const addPage = (e) => {
    setPage(page + 1);
  };

  const pageBack = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    navigate(`page${page}`);
    console.log(page);
  }, [page]);

  return (
    <>
      <h1>{header}</h1>
      <StyledForm onSubmit={handleSubmit}>
        {content}
        <Routes>
          <Route path="/">
            <Route path="page1" element={<Page1 header="General" />} />
            <Route path="page2" element={<Page2 header="Properties" formErrors={formErrors} />} />
            <Route path="page3" element={<Page3 header="Communication" />} />
            <Route path="page4" element={<Page4 header="Features" />} />
          </Route>
        </Routes>
        <Outlet />
      </StyledForm>
      <StyledSection buttons>
        { page > 1 && <Button text="Back" type="button" pd=".5em 0" onClick={pageBack} disabled={page === 1 && 'true'} className={page === 1 ? 'fadeout' : 'fadein'} /> }
        { page < 4 && <Button text="Next" type="button" pd=".5em 0" onClick={addPage} disabled={page === 4 && 'true'} /> }
        { page === 4 && <Button text="Submit" type="submit" pd=".5em 0" handleSubmit={handleSubmit} /> }
      </StyledSection>
    </>
  );
}

export default Form;

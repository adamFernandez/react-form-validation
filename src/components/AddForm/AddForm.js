import { useState, useEffect } from 'react';
import { StyledForm } from "../Products/Form/Form.styled";
import { StyledSection } from '../Products/Form/Section/Section.styled';
import {
  Button, AddItem
} from "../../imports/components";
import {
  InputField, SelectField
} from '../Products/Form/index';
import AddCheckbox from '../AddCheckbox/AddCheckbox';


const AddForm = () => {
  const [formListItems, setFormListItems] = useState([]);
  const [select, setSelect] = useState("");

  const getSelected = (value) => {
    switch (value) {
      case "input":
        return <InputField name={`input ${formListItems.length}`} key={formListItems.length} />;
      case "button":
        return <Button key={formListItems.length} text="Submit" type="submit" pd=".5em 0" handleSubmit={handleSubmit} />;
      case "checkbox":
        return <AddCheckbox key={formListItems.length} />;
      case "select":
        return <SelectField key={formListItems.length} name="select element" options={['Insert Options']} handleChange={handleChange} />;
      default:
        return "";
    }
  }
  const addFormItem = (e) => {
    const selected = getSelected(select);
    select === "" ? setSelect("input") : '';
    setFormListItems(formListItems.concat(
      selected
    ));
  };

  const handleChange = (e) => {
    setSelect(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    addFormItem();
  }, [select])


  return (
    <StyledForm>
      {formListItems}
      <StyledSection buttons>
        <SelectField selected={select} name="select form items" options={['input', 'checkbox', 'select', 'button']} handleChange={handleChange} mb="" />
        <AddItem color="black" key={formListItems.length} onClick={addFormItem} size="2x" width="10%" />
      </StyledSection>
      {/* <Button text="Submit" type="submit" pd=".5em 0" handleSubmit={handleSubmit} /> */}
    </StyledForm>
  );
};

export default AddForm;
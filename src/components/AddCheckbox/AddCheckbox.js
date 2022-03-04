import { useState, useEffect } from 'react';
import { StyledSection } from "../Products/Form/Section/Section.styled";
import { RemoveItem, AddItem } from '../../imports/components';
import { InputField } from '../Products/Form/index';

const AddCheckbox = () => {

  const [checkboxList, setCheckboxList] = useState([]);

  const removeCheckBox = (e) => {
    setCheckboxList(checkboxList.filter((item) => item.key !== e.target.parentElement.key));
    console.log((e.target.parentElement.id));
    console.log(checkboxList);

  }

  const addCheckBox = (e) => {
    setCheckboxList(checkboxList.concat(
      <StyledSection checkboxform key={`checkbox${checkboxList.length}`}>
        <InputField type="checkbox" name={`checkbox ${checkboxList.length}`} />
        <RemoveItem color="red" id={`checkbox${checkboxList.length}`} onClick={(e) => removeCheckBox(e)} size="1x" width="10%" />
      </StyledSection>
    ))
  }

  useEffect(() => {
    addCheckBox();
    console.log(checkboxList);
  }, []);

  return (
    <StyledSection buttons>
      <StyledSection checkbox>
        {checkboxList}
      </StyledSection>
      <AddItem color="black" key={`AddItem-${checkboxList.length}`} onClick={addCheckBox} size="2x" width="10%" />
    </StyledSection>
  )
}

export default AddCheckbox
import { useState, useEffect } from 'react';
import { StyledSection } from "../Products/Form/Section/Section.styled";
import { RemoveItem, AddItem } from '../../imports/components';
import { InputField } from '../Products/Form/index';

const AddCheckbox = () => {

  const [checkboxList, setCheckboxList] = useState([]);

  const removeCheckBox = (e) => {
    const newList = checkboxList.filter((i) => i !== item);

  }

  const addCheckBox = (e) => {
    setCheckboxList(checkboxList.concat(
      <StyledSection buttons>
        <InputField type="checkbox" name={`checkbox ${checkboxList.length}`} key={checkboxList.length} />
        <RemoveItem color="red" key={`RemoveItem-${checkboxList.length}`} onClick={() => removeCheckBox()} size="1x" width="10%" />
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
        {checkboxList.length === 0 && <InputField type="checkbox" name={`checkbox ${checkboxList.length}`} key={checkboxList.length} />}
        {checkboxList}
      </StyledSection>
      <AddItem color="black" key={`AddItem-${checkboxList.length}`} onClick={addCheckBox} size="2x" width="10%" />
    </StyledSection>
  )
}

export default AddCheckbox
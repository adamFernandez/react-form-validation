import { InputField } from "../../index";
import { StyledSection } from "../../Section/Section.styled";
import { wifis, sims } from "../../../../data/index";

const Page3 = ({ header, formErrors }) => {
  return (
    <StyledSection>
      <h4>{header}:</h4>
      <StyledSection checkbox>
        <InputField type="checkbox" name="5G" />
        <InputField type="checkbox" name="sub-6" />
        <InputField type="checkbox" name="4G" />
        {wifis.map((wifi, index) => <InputField key={index} type="checkbox" name={wifi} />)}
        <InputField type="checkbox" name="bluetooth" />
        <InputField type="checkbox" name="nfc" />
      </StyledSection>
      <h5>Sim Cards</h5>
      <StyledSection checkbox>
        {sims.map((sim, index) => <InputField key={index} type="checkbox" name={sim} />)}
      </StyledSection>
    </StyledSection>
  )
}

export default Page3
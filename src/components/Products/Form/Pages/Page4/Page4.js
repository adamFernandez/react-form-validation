import { InputField } from "../../index";
import { StyledSection } from "../../Section/Section.styled";
import { features, sensors } from "../../../../data/index";

const Page4 = ({ header, formErrors }) => {
  return (
    <StyledSection>
      <h4>{header}:</h4>
      <h5>Features</h5>
      <StyledSection checkbox list>
        {features.map((feature, index) => <InputField key={index} type="checkbox" name={feature} />)}
      </StyledSection>
      <h5>Sensors</h5>
      <StyledSection checkbox list>
        {sensors.map((sensor, index) => <InputField key={index} type="checkbox" name={sensor} />)}
      </StyledSection>
    </StyledSection>
  )
}

export default Page4
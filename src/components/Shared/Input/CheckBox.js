import React, { useState } from "react";

import {
  CheckBoxLabel,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  InputLabel,
} from "./CheckBox.style";

const CheckBox = ({ buttonText, style, isChecked = false }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <CheckBoxLabel style={style}>
      <CheckboxContainer onChange={handleCheckboxChange}>
        <HiddenCheckbox
          id="autoLogin"
          name="autoLogin"
          type="checkbox"
          checked={checked}
        />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <InputLabel htmlFor="autoLogin">{buttonText}</InputLabel>
    </CheckBoxLabel>
  );
};

export default CheckBox;

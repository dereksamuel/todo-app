import { useState } from "react";

export const useChangeValue = (defaultValue = "", handleChange) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (event) => {
    setValue(event.target.value);
    handleChange?.();
  };

  return [value, onChange];
};

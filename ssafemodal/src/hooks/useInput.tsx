import { ChangeEvent, useState } from "react";

export const useInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const inputProps={
    value:inputValue,
    handleChange:handleChange
  };

  return inputProps;
};


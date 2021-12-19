import React from 'react';
import Styled from 'styled-components';

//- Sytled Component
const InputBox = Styled.input`
  font-size: 16px;
  text-align: center;
  width: 100%;
  border-radius: 8px;
  border: 1px solid #BDBDBD;
  outline: none;
  padding: 10px;
  margin-right: 10px;
`;

//- React Component
interface Props {
  readonly placeholder?: string;
  readonly value?: string;
  readonly onChange?: (text: string) => void;
}

export const Input = ({ placeholder, value, onChange }: Props) => {
  return (
    <InputBox
      placeholder={placeholder}
      value={value}
      onChange={(event) => {
        if (typeof onChange === 'function') {
          onChange(event.target.value);
        }
      }}
    />
  );
};

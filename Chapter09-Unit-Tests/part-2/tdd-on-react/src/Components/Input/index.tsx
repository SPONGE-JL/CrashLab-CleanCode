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
}

export const Input = ({ placeholder }: Props) => {
  return <InputBox placeholder={placeholder} />;
};

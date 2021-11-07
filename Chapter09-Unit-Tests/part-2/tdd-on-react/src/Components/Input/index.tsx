import React from 'react';
import Styled from 'styled-components';

//- Sytled Component
const InputBox = Styled.input``;

//- React Component
interface Props {
  readonly placeholder?: string;
}

export const Input = ({ placeholder }: Props) => {
  return <InputBox placeholder={placeholder} />;
};

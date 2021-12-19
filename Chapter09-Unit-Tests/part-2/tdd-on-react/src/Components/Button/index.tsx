import React from 'react';
import Styled from 'styled-components';

//- Sytled Component
interface ContainerProps {
  readonly backgroundColor: string;
  readonly hoverColor: string;
}

const Container = Styled.div<ContainerProps>`
  text-align: center;
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = Styled.div`
  color: #FFFFFF;
  font-size: 16px;
`;

//- React Component
interface Props {
  readonly label: string;
  readonly onClick?: () => void;
  readonly backgroundColor?: string;
  readonly hoverColor?: string;
}

export const Button = ({ label, onClick, backgroundColor = '#304FFE', hoverColor = '#1639FE' }: Props) => {
  return (
    <Container onClick={onClick} backgroundColor={backgroundColor} hoverColor={hoverColor}>
      <Label>{label}</Label>
    </Container>
  );
};

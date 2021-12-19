import React from 'react';
import Styled from 'styled-components';

import { Button } from 'Components/Button';
import { Input } from 'Components/Input';

//- Sytled Component
const Container = Styled.div`
  display: flex;
`;

//- React Component
interface Props {
  readonly todo?: string;
  readonly onType?: (text: string) => void;
  readonly onAdd?: () => void;
}

export const InputBox = ({ todo, onType, onAdd }: Props) => {
  return (
    <Container>
      <Input placeholder="Insert a new todo" value={todo} onChange={onType} />
      <Button label="Add" onClick={onAdd} />
    </Container>
  );
};

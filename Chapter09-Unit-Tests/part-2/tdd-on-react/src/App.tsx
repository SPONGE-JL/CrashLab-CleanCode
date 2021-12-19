import React, { useState } from 'react';
import Styled from 'styled-components';

import { InputBox } from 'Components/InputBox';

//- Sytled Component
const Container = Styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const Contents = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 0% 25%;
  padding: 20px;
  border-radius: 8px;
  background-color: : #FFFFFF;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

function App() {
  //- States
  const [todo, setTodo] = useState('');
  const [cache, setCache] = useState('cache');

  //- Event Functions
  const addTodo = (): void => {
    if (todo) {
      setCache(todo);
      setTodo('');
    }
  };

  return (
    <Container>
      <Contents>
        <p>{cache}</p>
        <InputBox todo={todo} onType={(inputText) => setTodo(inputText)} onAdd={addTodo} />
      </Contents>
    </Container>
  );
}

export default App;

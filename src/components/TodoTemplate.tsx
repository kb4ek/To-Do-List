import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 480px;

  position: relative;
  border-radius: 16px;

  margin: 0 auto;

  margin-top: 125px;

  background: white;

  display: flex;
  flex-direction: column;
`;

interface ITodoTemplate {
  children?: React.ReactNode;
}

const TodoTemplate = ({ children }: ITodoTemplate) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;

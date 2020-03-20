import React from 'react';
import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Todo, useTodoDispatch } from '../TodoContext';

const Remove = styled.div`
  margin-right: 10px;
  font-size: 35px;
  justify-content: flex-end;
  color: #ff476c;
`;

const TodoItemBlock = styled.div`
  margin: 10px 0px;

  width: 320px;

  display: flex;

  border-radius: 10px;

  background: #4470ff;

  align-items: center;
`;

const Text = styled.div<{ done: boolean }>`
  cursor: pointer;

  font-family: 'Roboto';
  font-size: 16px;
  flex: 1;

  margin-left: 15px;

  color: white;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `};
`;

const TodoItem = ({ id, done, content }: Todo) => {
  const dispatch = useTodoDispatch();

  const onToggle = () => dispatch({ type: 'UPDATE', id });
  const onRemove = () => dispatch({ type: 'DELETE', id });

  return (
    <TodoItemBlock>
      <Text onClick={onToggle} done={done}>
        {id}
        {content}
      </Text>
      <Remove onClick={onRemove}>
        <MdClose />
      </Remove>
    </TodoItemBlock>
  );
};

export default React.memo(TodoItem);

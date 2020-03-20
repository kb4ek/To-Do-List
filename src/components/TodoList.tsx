import React from 'react';
import styled from 'styled-components';
import { useTodoState, Todo } from '../TodoContext';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding-bottom: 50px;
`;

interface ITodoList {
  children?: React.ReactNode;
}

const TodoList = ({ children }: ITodoList) => {
  const todos: Todo[] = useTodoState();

  return (
    <TodoListBlock>
      {todos.map((todo: Todo) => (
        <TodoItem id={todo.id} content={todo.content} done={todo.done} />
      ))}
    </TodoListBlock>
  );
};

export default TodoList;

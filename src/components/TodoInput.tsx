import React, { Dispatch, useState, MutableRefObject } from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, Action, useTodoNextId } from '../TodoContext';

const AddItem = styled.button`
  width: 50px;
  height: 50px;

  margin-left: 7px;

  font-size: 30px;

  display: flex;
  justify-content: center;

  border: none;
  background: none;
`;

const TodoInputBlock = styled.form`
  padding-top: 70px;
  padding-bottom: 60px;

  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  width: 260px;
  height: 50px;

  font-size: 16px;
  font-family: 'Roboto';

  border: none;
  border-bottom: 3px solid #ff476c;
`;

const TodoInput = () => {
  const dispatch: Dispatch<Action> = useTodoDispatch();
  const nextId: MutableRefObject<number> = useTodoNextId();

  const [value, setValue] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: 'ADD', todo: { id: nextId.current, content: value, done: false } });
    setValue('');
    nextId.current += 1;
  };

  return (
    <TodoInputBlock onSubmit={onSubmit}>
      <Input value={value} onChange={onChange} />
      <AddItem>
        <MdAdd />
      </AddItem>
    </TodoInputBlock>
  );
};

export default React.memo(TodoInput);

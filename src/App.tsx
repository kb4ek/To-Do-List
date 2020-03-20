import React from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { TodoProvider } from './TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ccc
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoInput />
          <TodoList />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;

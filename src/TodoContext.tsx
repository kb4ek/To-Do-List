import React, {
  useReducer,
  useRef,
  useContext,
  createContext,
  Dispatch,
  MutableRefObject
} from 'react';

const todos: Todo[] = [
  {
    id: 1,
    content: '투두 만들기',
    done: true
  },
  {
    id: 2,
    content: '투두 이용하기',
    done: false
  }
];

export type Todo = {
  id: number;
  content: string;
  done: boolean;
};

export type Action =
  | { type: 'ADD'; todo: { id: number; content: string; done: boolean } }
  | { type: 'UPDATE'; id: number }
  | { type: 'DELETE'; id: number };

const todoReducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'ADD':
      return state.concat(action.todo);
    case 'UPDATE':
      return state.map(todo => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type`);
  }
};

const TodoStateContext = createContext<Todo[] | undefined>(undefined);
const TodoDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);
console.log(TodoDispatchContext);
const TodoNextIdContext = createContext<MutableRefObject<number> | undefined>(undefined);

export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, todos);
  const nextId = useRef(todos.length + 1);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>{children}</TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState: () => Todo[] = () => {
  const context: Todo[] | undefined = useContext(TodoStateContext);

  if (!context) {
    throw new Error('cannot find TodoProvider');
  }

  return context;
};

export const useTodoDispatch: () => Dispatch<Action> = () => {
  const context: Dispatch<Action> | undefined = useContext(TodoDispatchContext);

  if (!context) {
    throw new Error('cannot find TodoProvider');
  }

  return context;
};

export const useTodoNextId: () => MutableRefObject<number> = () => {
  const context: MutableRefObject<number> | undefined = useContext(TodoNextIdContext);

  if (!context) {
    throw new Error('cannot find TodoProvider');
  }

  return context;
};

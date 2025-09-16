import { useCallback, useRef, useState } from 'react';
import TodoList from './components/TodoList/Todolist';

export default function App() {

  const [list, setList] = useState([ 'First task', 'Second Task'])
  
  const inputRef = useRef(null);

  function handleFocus () {
    inputRef.current.focus();
  }

  function handleBlur () {
    inputRef.current.blur();
  }

  const onAddNewTask = useCallback(() => {
    setList([...list, `New task ${list.length + 1}`])
  }, [list])



  return (
   <>
    <input ref={inputRef} />
    <button onClick={handleFocus}>focus</button>
    <button onClick={handleBlur}>blur</button>

    <TodoList list={list} handleAdd={onAddNewTask}/>
   </>
  );
}

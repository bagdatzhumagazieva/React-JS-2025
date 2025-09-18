import { useCallback, useRef, useState } from 'react';
import { TodoList } from './components/TodoList/Todolist';

export default function App() {

  const [list, setList] = useState([
    {id: 1, name: '1 todo'},
    {id: 2, name: '2 todo'},
  ])

  const inputRef = useRef(null);
  const count = useRef(0);

  function handleFocus () {
    inputRef.current.focus();
  }


  function handleBlur () {
    inputRef.current.blur();
  }

  function handleSelect () {
    inputRef.current.select();
  }

  const addCountAlert = useCallback(() => {
    alert(`Count is: ${count.current}`)
    count.current = count.current + 1;
  }, [])

  const handleAddTodo = useCallback((text) => {
    setList([...list, {id: list.length + 1, name: text}])
  }, [list])


  const handleEditTodo = (index, text) => {
    setList(list.map((item,idx) => index===idx ? ({id: item.id, name: text}): item))
  }



  return (
   <>
    <input ref={inputRef} />
    <button onClick={handleFocus}>focus</button>
    <button onClick={handleBlur}>blur</button>
    <button onClick={handleSelect}>select</button>
    <button onClick={addCountAlert}>show alert count</button>

    <TodoList list={list} handleAdd={handleAddTodo} handleEdit={handleEditTodo}/>

   </>
  );
}

import { memo, useRef, useState } from "react"

export const TodoList = memo(({list, handleAdd, handleEdit}) => {
    const inputRef= useRef(null)
    const [text, setText] = useState('')
    const [editText, setEditText] = useState('')
    const [editIndex, setEditIndex] = useState(null)

    const onAdd = () => {
        if(!text) alert('Fill the input');
        handleAdd(text);
        inputRef.current.value = '';
    }

    return (
        <div>
            <input ref={inputRef} onChange={e => setText(e.target.value)}/>
            <button onClick={onAdd}>Add new item</button>
            <ul>
                {list.map((item, index) => (
                    <div>
                        {editIndex === index ? <input value={editText} onChange={e => setEditText(e.target.value)}/> : <li key={item.id}> {item.name}</li>}

                        {editIndex === index ? 
                            <button onClick={() =>{
                                if(!editText) alert('Fill the input')
                                else {
                                    handleEdit(index, editText)
                                    setEditIndex(null);
                                }
                                
                            }}>
                                save
                            </button> 
                            : <button onClick={() => {
                                setEditIndex(index)
                                setEditText(item.name)
                                }}
                                >
                                    edit
                                </button>
                                }
                        
                    
                    </div>

                ))}
            </ul>
        </div>
    )
})
export default function TodoList ({list, handleAdd}) {


    return (
        <div>
            <button onClick={handleAdd}>Add new task</button>
            <ul>
                {list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
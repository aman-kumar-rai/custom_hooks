import { useArray } from "../../hooks/index.jsx";

const App = () => {
    const {
        value,
        push,
        removeByIndex
    } = useArray([1, 2, 3]);

    const handleClickAdd = () => {
        push(Math.round(Math.random() * 100))
    }

    const handleClickRemove = () => {
        const index = Math.round(Math.random() * (value.length - 1));
        console.log(index);
        removeByIndex(index);
    }

    return (
        <div>
            <h1>Custom Hooks</h1>
            <ul>
                {value.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <button onClick={handleClickAdd}>Add</button>
            <button onClick={handleClickRemove}>Remove random items</button>
        </div>
    )
}

export default App;
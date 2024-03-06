import { useCount } from "../../hooks";

const Counter = () => {
    const { count, increment, decrement } = useCount(0);

    return (
        <div>
            <p>Count is {count}</p>
            <section>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </section>
        </div>
    )
}

export default Counter;
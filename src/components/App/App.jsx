// import { useEffect } from "react";
import { useCount, useUpdateEffect } from "../../hooks/index.jsx";

const App = () => {

    const { count, increment, decrement } = useCount({
        initialValue: 10
    });

    useUpdateEffect(() => {
        console.log("Count got incremented")
    }, [count])


    return (
        <div>
            <p>{count}</p>
            <div>
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    )
}

export default App;
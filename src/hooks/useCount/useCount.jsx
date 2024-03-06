import { useState, useCallback } from "react";

const useCount = (initialValue) => {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => {
        setCount(count => count + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount(count => count - 1);
    }, []);

    return {
        count,
        increment,
        decrement
    }

}

export default useCount;
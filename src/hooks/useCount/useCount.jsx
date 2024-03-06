import { useState, useCallback } from "react";

const useCount = ({
    initialValue = 0,
    step = 1,
    min = -Infinity,
    max = +Infinity
}) => {
    const [count, setCount] = useState(initialValue);

    // runs checks and updates state causing re-render of consuming component
    const increment = useCallback(() => {
        setCount(function nextCount(prevCount) {
            if (prevCount + step <= max) {
                return prevCount + step;
            }
            else {
                return prevCount;
            }
        })
    }, [step, max]);

    // runs checks and updates state causing re-render of consuming component
    const decrement = useCallback(() => {
        setCount(function nextCount(prevCount) {
            if (prevCount - step >= min) {
                return prevCount - step;
            }
            else {
                return prevCount;
            }
        });
    }, [step, min]);

    return {
        count,
        increment,
        decrement
    }
}

export default useCount;
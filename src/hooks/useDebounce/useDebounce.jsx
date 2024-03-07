import { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
    const [debounceValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)

        return function cleanup() {
            clearTimeout(timerId);
        }

    }, [value, delay]);

    return debounceValue;
}

export default useDebounce;
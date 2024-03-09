import { useState, useCallback } from "react";

const useArray = (arr) => {
    const [array, setArray] = useState(arr);

    const push = useCallback((item) => {
        setArray((prevArray) => [...prevArray, item]);
    }, []);

    const removeByIndex = useCallback((index) => {
        setArray((prevArray) => {
            const _array = [];
            for (let i = 0; i < prevArray.length; i++) {
                if (i !== index) {
                    _array.push(prevArray[i])
                }
            }
            return _array;
        })

    }, []);

    return {
        value: array,
        push,
        removeByIndex
    }
}

export default useArray;
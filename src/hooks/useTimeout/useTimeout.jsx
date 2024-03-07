import { useEffect, useRef } from "react";

const useTimeout = (callback, delay) => {
    const callbackRef = useRef(callback);

    // updating callbackRef, if callback updates
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])

    useEffect(() => {
        const timerId = setTimeout(() => callbackRef.current(), delay);

        // cleanup to clear timeout, if already exists
        return function cleanup() {
            clearTimeout(timerId);
        }

    }, [delay]);

}

export default useTimeout;
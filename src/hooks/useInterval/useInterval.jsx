import { useRef, useEffect } from "react";

const useInterval = (callback, delay = 0) => {
    const callbackRef = useRef(callback);

    // updating callbackRef, if callback updates
    useEffect(() => {
        callbackRef.current = callback;
    }, [callback])


    useEffect(() => {
        const intervalId = setInterval(() => callbackRef.current(), delay);

        // cleanup function to clear interval, if already exists
        return function cleanup() {
            clearInterval(intervalId);
        }

    }, [delay])

}

export default useInterval;
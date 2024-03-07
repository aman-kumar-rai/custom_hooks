import { useRef, useEffect } from "react";

const usePrevious = (value) => {
    const prevRef = useRef(undefined);

    useEffect(() => {
        prevRef.current = value;
    }, [value])

    return prevRef.current;
}

export default usePrevious;
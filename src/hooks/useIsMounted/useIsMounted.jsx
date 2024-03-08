import { useEffect, useRef } from "react";

// add the link to this page in documentation since isMounted() is an anti-pattern
// https://legacy.reactjs.org/blog/2015/12/16/ismounted-antipattern.html

const useIsMounted = () => {
    const isMountedRef = useRef(false);

    useEffect(() => {
        isMountedRef.current = true;

        return function cleanup() {
            isMountedRef.current = false;
        }
    }, [])

    return function isMounted() {
        return isMountedRef.current;
    }
}

export default useIsMounted;
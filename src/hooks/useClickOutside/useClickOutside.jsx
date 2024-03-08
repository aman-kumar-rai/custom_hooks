import { useRef, useEffect } from "react";

const useClickOutside = (callbackFn) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleClick = ({ target }) => {
            // not triggering callback for node with ref attached or any of it's children
            if (ref.current && !ref.current.contains(target)) {
                callbackFn();
            }
        }
        document.addEventListener("click", handleClick);

        return function cleanup() {
            document.removeEventListener("click", handleClick);
        }

    }, [callbackFn])

    return ref;
}

export default useClickOutside;
import { useState, useRef, useCallback } from "react";

const useFocus = () => {
    const [isFocused, setIsFocused] = useState(false);
    const ref = useRef(null);

    const handleFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const inputRefCallback = useCallback((domNode) => {

        // if the ref was already attached to a domNode before, cleaning up events
        if (ref.current) {
            ref.current.removeEventListener("focus", handleFocus);
            ref.current.removeEventListener("blur", handleBlur);
        }

        // attaching event handlers to new dom node on which ref callback is used
        if (domNode) {
            domNode.addEventListener("focus", handleFocus);
            domNode.addEventListener("blur", handleBlur);
            ref.current = domNode;
        }

    }, [handleFocus, handleBlur])

    return [inputRefCallback, isFocused];
}

export default useFocus;
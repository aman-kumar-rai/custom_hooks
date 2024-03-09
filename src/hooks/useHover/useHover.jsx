import { useRef, useCallback, useState } from "react";

const useHover = () => {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, [])

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, [])


    const refCallback = useCallback((domNode) => {

        if (ref.current) {
            ref.current.removeEventListener("mouseenter", handleMouseEnter);
            ref.current.removeEventListener("mouseleave", handleMouseLeave)
        }

        if (domNode) {
            domNode.addEventListener("mouseenter", handleMouseEnter);
            domNode.addEventListener("mouseleave", handleMouseLeave);
            ref.current = domNode;
        }

    }, [handleMouseEnter, handleMouseLeave]);


    return [refCallback, isHovered]
}

export default useHover;
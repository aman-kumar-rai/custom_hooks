import { useEffect, useRef } from "react";

const useUpdateEffect = (effect, deps) => {
    const firstMountRef = useRef(true);

    useEffect(() => {
        if (firstMountRef.current === true) {
            firstMountRef.current = false;
        }
        else {
            return effect();
        }
    }, deps)
}

export default useUpdateEffect;
import { useEffect, useRef } from "react";

const useEffectOnce = (effect) => {
    const effectRef = useRef(effect);

    useEffect(() => {
        const effectCleanup = effectRef.current();

        return function cleanup() {
            effectCleanup();
        }
    }, [])
}

export default useEffectOnce;
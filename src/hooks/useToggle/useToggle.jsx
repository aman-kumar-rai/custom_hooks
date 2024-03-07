import { useState, useCallback } from "react";

const useToggle = (initialState) => {
    const [isOn, setIsOn] = useState(initialState);

    const toggle = useCallback(() => {
        setIsOn(prevIsOn => !prevIsOn)
    }, []);

    return [isOn, toggle];
}

export default useToggle;
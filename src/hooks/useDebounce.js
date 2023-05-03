import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState();

    useEffect(()=>{
        const TimeoutID = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(TimeoutID);

    },[value])
    return debounceValue;
}

export default useDebounce;
import { useEffect, useState } from "react";


function useLocalState(defaultValue, key) {
    const [value, setValue] = useState(() => {
        const localStoregeValue = localStorage.getItem(key);

        return localStoregeValue !== null ? JSON.parse(localStoregeValue) : defaultValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

export { useLocalState};
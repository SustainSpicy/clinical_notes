import { useEffect, useState } from "react";

const useLocalStorage = (key, newState) => {
  const [state, setState] = useState(() => {
    const stateStr = window.localStorage.getItem(key);

    return stateStr && newState ? JSON.parse(stateStr) : newState;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorage;

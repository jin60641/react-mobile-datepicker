import { useRef, useState } from 'react';

export const useStateRef = <T extends unknown>(initialState: T) => {
  const [state, setState] = useState(initialState);
  const ref = useRef(initialState);

  const setStateAndRef = (newState: T) => {
    setState(newState);
    ref.current = newState;
  };


  // return ref as Readonly
  // update only through setStateAndRef
  return [state, setStateAndRef, ref as Readonly<React.MutableRefObject<T>>] as const;
};
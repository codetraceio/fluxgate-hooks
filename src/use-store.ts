import { useEffect, useState } from "react";
import { CHANGE_EVENT } from "fluxgate";
import { Store } from "fluxgate/typescript/interfaces";

export function useStore<T>(store: Store<T>) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const eventListener = (storeState: T) => {
      setState(storeState);
    };
    store.on(CHANGE_EVENT, eventListener);

    // Store can be changed before calling useEffect
    const newState = store.getState();
    if (newState !== state) {
      setState(newState);
    }

    return () => {
      store.off(CHANGE_EVENT, eventListener);
    };
  }, []);

  return state;
}

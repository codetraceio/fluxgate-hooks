import { useEffect, useState } from "react";
import { CHANGE_EVENT } from "fluxgate";
import { IStore } from "fluxgate/typescript/interfaces";

export function useStore<T>(store: IStore<T>) {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const eventListener = (storeState: T) => {
      setState(storeState);
    };
    store.on(CHANGE_EVENT, eventListener);
    return () => {
      store.off(CHANGE_EVENT, eventListener);
    };
  }, []);

  return state;
}

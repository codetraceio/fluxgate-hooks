import { useEffect, useState } from "react";
import { EVENT_CHANGE } from "rex-store";
import { IStore } from "rex-store/typescript/interfaces";

export function useStore<T>(store: IStore<T>) {
  const [state, setState] = useState({});

  useEffect(() => {
    const eventListener = (storeState: T) => {
      setState(storeState);
    };
    store.on(EVENT_CHANGE, eventListener);
    return () => {
      store.off(EVENT_CHANGE, eventListener);
    };
  }, []);

  return state;
}

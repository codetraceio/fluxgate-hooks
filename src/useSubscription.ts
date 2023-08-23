import { DependencyList, useContext, useEffect } from "react";
import { Store } from "fluxgate/typescript/interfaces";
import { StoreContent } from "./storeContext";

export function useSubscription<T>(
  storeName: string | Store<T>,
  eventName: string,
  eventListener: (result: any) => void,
  deps: DependencyList = [],
) {
  const storeContext = useContext(StoreContent);
  const store = typeof storeName === "string" ? storeContext.stores[storeName] : storeName;

  useEffect(() => {
    store.on(eventName, eventListener);
    return () => {
      store.off(eventName, eventListener);
    };
  }, deps);
}

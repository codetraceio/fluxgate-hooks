import { useContext, useEffect } from "react";
import { Store } from "fluxgate/typescript/interfaces";
import { StoreContent } from "./storeContext";

export function useSubscriptionIf<T>(
  storeName: string | Store<T>,
  condition: boolean,
  eventName: string,
  eventListener: (result: any) => void,
) {
  const storeContext = useContext(StoreContent);
  const store = typeof storeName === "string" ? storeContext.stores[storeName] : storeName;

  useEffect(() => {
    if (condition) {
      store.on(eventName, eventListener);
    } else {
      store.off(eventName, eventListener);
    }
    return () => {
      store.off(eventName, eventListener);
    };
  }, [condition]);
}

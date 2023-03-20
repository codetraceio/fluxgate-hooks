import { DependencyList, useEffect } from "react";
import { Store } from "fluxgate/typescript/interfaces";

export function useSubscription(
  store: Store<any>,
  eventName: string,
  eventListener: (result: any) => void,
  deps: DependencyList = [],
) {
  useEffect(() => {
    store.on(eventName, eventListener);
    return () => {
      store.off(eventName, eventListener);
    };
  }, deps);
}

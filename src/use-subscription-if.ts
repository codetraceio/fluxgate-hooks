import { useEffect } from "react";
import { Store } from "fluxgate/typescript/interfaces";

export function useSubscriptionIf(
  store: Store<any>,
  condition: boolean,
  eventName: string,
  eventListener: (result: any) => void,
) {
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

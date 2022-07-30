import { useContext } from "react";
import { StoreContent } from "./storeContext";

export function useActions<T>(storeName: string) {
  const storeContext = useContext(StoreContent);
  return storeContext.actions[storeName] as T;
}

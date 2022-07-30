import { useContext } from "react";
import { StoreContent } from "./storeContext";

export function useActions<T>(storeName: string) {
  const storeContext = useContext(StoreContent);
  return storeContext.stores[storeName] as T;
}

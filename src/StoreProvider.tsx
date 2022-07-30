import React, { PropsWithChildren } from "react";
import { StoreContent } from "./storeContext";

interface StoreProviderProps<T, A> {
  stores: T;
  actions: A;
}

export function StoreProvider<T, A>(props: PropsWithChildren<StoreProviderProps<T, A>>) {

  return (
    <StoreContent.Provider value={{
      stores: props.stores,
      actions: props.actions,
    }}>
      {props.children}
    </StoreContent.Provider>
  );
}

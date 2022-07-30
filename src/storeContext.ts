import React from "react";

export const StoreContent = React.createContext<{
  stores: any,
  actions: any,
}>({
  stores: null,
  actions: null,
});
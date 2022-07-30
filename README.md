# Fluxgate React Hooks

## Example of usage

```
import * as React from "react";
import { createStore, createEmitter, createActions } from "fluxgate";
import { useState, StoreProvider } from "fluxgate-hooks";

interface User {
  id: string;
  login: string;
}

interface UserStore {
  user: User;
  loading: boolean;
}

const Stores = {
  user = "user",
};

const userEmitter = createEmitter();

const userStore = createStore<UserStore>(userEmitter, {
  user: null,
  loading: false,
}, "user");

function loadUser(id: string) {
  userStore.setState({ loading: true });
  readUserFromApi(id).then((user) => { // readUserFromApi - is not defined in the example
    userStore.setState({
      user,
      loading: false,
    });
  });
}

const userActions = createActions(userStore, {
  loadUser,
});

function AppContainer() {
  const userState = useStore<UserStore>(Stores.user);
  
  if (userState.user) {
    return (
      <StoreProvider
        stores={{
          [Stores.user]: userStore,
        }}
        actions={{
          [Stores.user]: userActions,
        }}
      >
        <div>
          {user.id} {user.login}
        </div>
      </StoreProvider>
    );
  }

  return (
    <button onClick={userActions.loadUser}>Load User</button>
  );
}

ReactDom.render(<AppContainer />, window.document.querySelector('.app'));
```
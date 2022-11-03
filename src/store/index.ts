import { configureStore } from "@reduxjs/toolkit";

import { reducer as session } from "@src/store/slices/session";

const reducer = {
  session,
};

export let store = configureStore({
  reducer,
});

export type Store = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

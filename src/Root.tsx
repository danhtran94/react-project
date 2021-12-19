import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { loadStore } from "@src/store/index";
import { App } from "./App";

const store = loadStore();

export function Root(props: any) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

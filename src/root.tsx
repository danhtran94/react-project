import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "@src/store/index";
import { App } from "./app";

export function Root(props: any) {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
}

import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";
import React from "react";
import UserdetailsStore from "../src/list/redux/store.tsx";
import { Provider } from "react-redux";
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={UserdetailsStore}>
    <App />
  </Provider>
);

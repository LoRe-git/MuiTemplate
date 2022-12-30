import * as React from "react";
import { render } from "react-dom";
import Demo from "./demo";
import { Provider } from "react-redux";

import configureStore from "./store";

const root = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <Demo />
    </Provider>
  </React.StrictMode>,
  root
);

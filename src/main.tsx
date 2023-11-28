import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { BrowserRouter } from "react-router-dom";
import Hostages from "./features/layout/war/Hostages.tsx";
import OpenMassage from "./features/layout/war/OpenMassage.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Hostages />
      <OpenMassage />
      <App />
    </BrowserRouter>
  </Provider>
);

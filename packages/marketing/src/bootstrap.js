import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// Funcion Mount para iniciar el APP
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Desarrollo aislado que inicialice a mount inmediatamente
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}
// Exportar mount para correr  a traves de un contenedor
export { mount };

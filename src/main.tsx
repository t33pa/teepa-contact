import { render } from "preact";
import { App } from "./app.tsx";
import { LanguageProvider } from "./lib/LanguageContext.tsx";
import "./index.css";

const rootElement = document.getElementById("app");

if (rootElement) {
  render(
    <LanguageProvider>
      <App />
    </LanguageProvider>,
    rootElement
  );
} else {
  console.error("Root element not found");
}

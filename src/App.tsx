import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/error/ErrorBoundary";
import Main from "./Main";
import "@styles/global.scss";

const container = document.getElementById("calendar-root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

root.render(
  <ErrorBoundary>
    {/* <BrowserRouter basename="/group-job/calendar"> */}
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </ErrorBoundary>,
);

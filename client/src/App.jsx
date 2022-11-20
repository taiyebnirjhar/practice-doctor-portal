import React, { useContext } from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeContext } from "./contexts/ThemeToggleContext/ThemeTogglContext";
import router from "./routes/Routes";

function App() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

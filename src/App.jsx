import "./App.css";
import ThemeProvider from "./provider/themeProvider";
import Navbar from "./components/navbar";
import { Outlet, RouterProvider } from "react-router";
import router from "./routes/routes";

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

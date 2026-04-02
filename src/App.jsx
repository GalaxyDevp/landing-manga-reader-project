import "./App.css";
import Register from "./page/auth/register";
import Home from "./page/home";

import ThemeProvider from "./provider/themeProvider";
import Navbar from "./components/navbar";
import SignIn from "./page/auth/signIn";

function App() {
  //install router dom
  return (
    <ThemeProvider>
      <Navbar />
      <Register />
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import Home from "./page/home";
import ThemeProvider from "./provider/themeProvider";

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;

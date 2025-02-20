import { useContext } from "react";
import Header from "./components/Header";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen ${theme === 'light' ? 'bg-blue-100' : 'bg-blue-950'}`}
    >
      <h1 className="underline">Hello</h1>
      <Header />
    </div>
  );
}

export default App;

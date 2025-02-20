import { useContext } from "react";
import Header from "./components/Header";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen ${
        theme === "light" ? "bg-blue-100" : "bg-blue-950"
      } p-4 grid grid-cols-2`}
    >
      <Navbar />
      <div className="nav">
        <Header />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Routers from "./components/Routers";
import { LoginContext } from "./contexts/LoginContext";

const App = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext.Provider value={{ login, setLogin }}>
          <Navbar />
          <Routers />
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
};

export default App;

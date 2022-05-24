import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./shared/modules/Navbar";
import Routers from "./shared/modules/Routers";
import { LoginContext } from "./shared/contexts/LoginContext";

const App = () => {
  const [login, setLogin] = useState(false);
  console.log("App: 10");
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

import React, { useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./components/Header/Header";


const App = () => {
  return (
    <div>
      <Homepage/>
      <Login/>
      <Register/>
      <Header/>
    </div>
  );
};

export default App;
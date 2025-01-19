import React, { useEffect } from "react";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";


const App = () => {
  return (
    <div>
      <Homepage/>
      <Login/>
      {/* <Register/> */}
    </div>
  );
};

export default App;
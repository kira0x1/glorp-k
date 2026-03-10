import { APITester } from "./APITester";
import "./index.css";

import { Navbar } from "./components/Navbar";

export function App() {
  return (
    <div className="app">
      <Navbar />
      {/* <div className="logo-container"> */}
      {/* <img src={logo} alt="Bun Logo" className="logo bun-logo" />
        <img src={reactLogo} alt="React Logo" className="logo react-logo" /> */}
      {/* </div> */}

      {/* <h1>Bun + React</h1>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p> */}
      {/* <APITester /> */}
    </div>
  );
}

export default App;

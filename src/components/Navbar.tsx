import "./components.css";
import { Navtab } from "./Navtab";

export function Navbar() {
  return (
    <div className="navbar">
      <Navtab tabName="Home" />
      <Navtab tabName="About" />
    </div>
  );
}

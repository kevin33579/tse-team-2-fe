import "./navbar.css";
import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <span className="brand">Otomobil</span>
      </div>
      <div className="navbar-right">
        <Button label="Sign Up" variant="secondary" onClick={() => alert("Sign Up clicked")} />
        <Button label="Login" variant="primary" onClick={() => alert("Login clicked")} />
      </div>
    </nav>
  );
}

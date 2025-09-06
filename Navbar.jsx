import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">EV-Website</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

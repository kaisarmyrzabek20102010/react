import "./header.css";

function Header() {
  return (
    <header>
      <div>
        <img src="https://i.pinimg.com/736x/ff/be/96/ffbe967dabc3bf8603fb9d64b92acc49.jpg" />
      </div>

      <div className="header-text">
        <h1>My blog</h1>
        <p>simple and wonderful studying</p>
      </div>

      <nav>
        <a href="">register</a>
        <a href="">login</a>
        <a href="">home</a>
      </nav>
    </header>
  );
}

export default Header;

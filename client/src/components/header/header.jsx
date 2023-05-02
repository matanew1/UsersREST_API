import './header.css';

function Header() {
  return (
    <div className='header-container'>
      <header>
          <a href="/api/home">
            <img src="/logo.jpg" alt="LOGO"/>
          </a>
        <nav>
          <ul className='header-ul'>
            <li className='header-li-text'>already have account?</li>
            <li><a href="/api/login">Login</a></li>
            <li><a href="/api/home">Home</a></li>
            <li><a href="/api/about">About</a></li>
            <li><a href="/api/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
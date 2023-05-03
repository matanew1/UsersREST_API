import './header.css';

function Header() {
  return (
    <div className='header-container'>
      <header>
          <a href="/profile/home">
            <img src="/logo.jpg" alt="LOGO"/>
          </a>
        <nav>
          <ul className='header-ul'>
            {/* <li className='header-li-text'>already have account?</li>
            <li><a href="/login">Login</a></li> */}
            <li><a href="/profile/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>          
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
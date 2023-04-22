import './header.css';

function Header() {
  return (
    <div className='header-container'>
      <header>
      <img src='/logo.jpg' alt='LOGO'></img> 
        <nav>
          <ul className='header-ul'>
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

import './header.css';

function Header() {
  return (
    <div className='header'>
      <header>     
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;

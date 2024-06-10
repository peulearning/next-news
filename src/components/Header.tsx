import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <img src="/logo.jpg" alt="Logo" />
            <span className="brand-text">Portal de Notícias CNN</span>
          </a>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" legacyBehavior>
              <a className="nav-link">Search</a>
            </Link>
          </li>
          {/* Adicione outros links de navegação conforme necessário */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

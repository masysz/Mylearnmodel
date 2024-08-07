// components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <Link href="/">
          <a className={styles.menuItem}>Home</a>
        </Link>
        <Link href="/about">
          <a className={styles.menuItem}>About</a>
        </Link>
        <Link href="/services">
          <a className={styles.menuItem}>Services</a>
        </Link>
        <Link href="/contact">
          <a className={styles.menuItem}>Contact</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;


import React from "react";
import styles from './Navbar.module.css';
import  {ActiveLink}  from "./ActiveLink";
export const Navbar = () => {
  return (
    <nav className={styles[ 'menu-container']}>
      <ActiveLink text="Home" href="/" />
      <ActiveLink text="about" href="/about" />
      <ActiveLink text="contact" href="/contact" />
    </nav>
  );
};

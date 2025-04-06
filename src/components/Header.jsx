import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      {/* 로고 */}
      <div className={styles.logo}>
        <Link to="/">K-Quizz.com</Link>
      </div>
    </header>
  );
}

export default Header;
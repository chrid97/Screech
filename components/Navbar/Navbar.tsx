import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a>NEW TTS</a>
      <a>RECENT</a>
      <a>TRENDING</a>
      <a>ALL</a>
    </nav>
  );
}

export default Navbar;

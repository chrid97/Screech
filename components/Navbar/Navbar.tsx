import styles from "./Navbar.module.css";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a>HOME</a>
      </Link>
      <Link href="/NewMessage/">
        <a>NEW TTS</a>
      </Link>
      {/* <a>RECENT</a> */}
      {/* <a>TRENDING</a> */}
      <a>ALL</a>
    </nav>
  );
}

export default Navbar;

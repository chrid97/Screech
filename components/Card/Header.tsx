import styles from "./Card.module.css";

function Header({ user, numberOfLikes, numberOfTimesCopied }: any) {
  return (
    <div className={styles["card-header"]}>
      <span>{user.toLocaleUpperCase()}</span>
      <span>
        {numberOfLikes} likes, {numberOfTimesCopied} copies
      </span>
    </div>
  );
}

export default Header;

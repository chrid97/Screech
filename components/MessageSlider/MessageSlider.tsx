import styles from "./MessageSlider.module.css";
import { Card, Message } from "../Card/Card";

function MessageSlider({
  messages,
  title,
}: {
  messages: Message[];
  title: string;
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles["heading"]}>{title.toLocaleUpperCase()}</h2>
      <div className={styles.row}>
        {messages.map((message) => (
          <Card key={message.uid} {...message} />
        ))}
      </div>
    </section>
  );
}

export default MessageSlider;

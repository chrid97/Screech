import styles from "./Card.module.css";
import Footer from "./Footer";
import Header from "./Header";

export interface Message {
  uid: number;
  user: string;
  message: string;
  voice: Voices;
  numberOfLikes: number;
  numberOfTimesCopied: number;
  dateSaved?: Date;
}

type Voices = SpeechSynthesisVoice | string;

function changeVoices(): void {}

export function Card({
  user,
  message,
  voice,
  numberOfLikes,
  numberOfTimesCopied,
}: Message) {
  return (
    <div className={styles.card}>
      <Header {...{ user, numberOfLikes, numberOfTimesCopied }} />
      <div className={styles["card-text"]}>{message}</div>
      <Footer {...{ message }} />
    </div>
  );
}

export default Card;

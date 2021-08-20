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

export interface CardProps extends Message {
  voices: SpeechSynthesisVoice[];
}

type Voices = string;

export function Card({
  user,
  message,
  voice,
  numberOfLikes,
  numberOfTimesCopied,
  voices,
}: CardProps) {
  return (
    <div className={styles.card}>
      <Header {...{ user, numberOfLikes, numberOfTimesCopied }} />
      <div className={styles["card-text"]}>{message}</div>
      <Footer {...{ message, voice, voices }} />
    </div>
  );
}

export default Card;

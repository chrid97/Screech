import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import playIcon from "../../public/buttons-icons/Sound.svg";
import copyIcon from "../../public/buttons-icons/Copy.svg";
import likeIcon from "../../public/buttons-icons/Like.svg";
import downloadIcon from "../../public/buttons-icons/Download.svg";

export interface Message {
  uid: number;
  user: string;
  message: string;
  voice: Voices;
  numberOfLikes: number;
  numberOfTimesCopied: number;
  // dateSaved: Date;
}

type Voices = string;

function useGetVoices(): SpeechSynthesisVoice[] {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      if (window != undefined) {
        setVoices(window.speechSynthesis.getVoices());
      }
    };
  });

  return voices;
}

function playMessage({ message }: Message): void {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(utterance);
}

function copyMessage({ message }: Message): void {
  navigator.clipboard.writeText(message);
  alert("Message copied to clipboard");
}

function likeMessage() {}

function downloadMessage() {}

function changeVoices(): void {}

export function Card({
  uid,
  user,
  message,
  voice,
  numberOfLikes,
  numberOfTimesCopied,
}: Message) {
  const messageObj: Message = {
    uid,
    user,
    message,
    voice,
    numberOfLikes,
    numberOfTimesCopied,
  };
  return (
    <div className={styles.card}>
      <div className={styles["card-header"]}>
        <span>{user.toLocaleUpperCase()}</span>
        <span>
          {numberOfLikes} likes, {numberOfTimesCopied} copies
        </span>
      </div>
      <div className={styles["card-text"]}>{message}</div>
      <div className={styles["card-footer"]}>
        <select
          className={styles["voice-dropdown"]}
          defaultValue={"DEFAULT"}
          onChange={changeVoices}
        >
          <option value="DEFAULT" disabled>
            Select a Voice
          </option>
        </select>
        {Actions.map((action) => Button({ message: messageObj, action }))}
      </div>
    </div>
  );
}

function FooterBar() {}

const Actions: [string, (e: Message) => void][] = [
  [playIcon, playMessage],
  [copyIcon, copyMessage],
  [likeIcon, likeMessage],
  [downloadIcon, downloadMessage],
];

interface ButtonProps {
  message: Message;
  action: [string, (e: Message) => void];
}

function Button({ message, action }: ButtonProps) {
  return (
    <button className={styles.cardButton} onClick={() => action[1](message)}>
      <Image src={action[0]} alt="button" className={styles.buttonIcon} />
    </button>
  );
}

export default Card;

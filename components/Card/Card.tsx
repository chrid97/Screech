import Image from "next/image";
import styles from "./Card.module.css";
import playIcon from "../../public/buttons-icons/Sound.svg";
import copyIcon from "../../public/buttons-icons/Copy.svg";
import likeIcon from "../../public/buttons-icons/Like.svg";
import downloadIcon from "../../public/buttons-icons/Download.svg";
import { useEffect, useState } from "react";
import { VoicesContext } from '../../pages/index';
import React from "react";

function useGetVoices(): SpeechSynthesisVoice[] {
  // const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  let voices: SpeechSynthesisVoice[] = [];
  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      if (window != undefined) {
        // setVoices(window.speechSynthesis.getVoices());
        voices = window.speechSynthesis.getVoices();
      }
    };
  }, []);

  return voices;
}

export interface Message {
  uid: number;
  user: string;
  message: string;
  voice: Voices;
  numberOfLikes: number;
  numberOfTimesCopied: number;
  // dateCreated: Date;
}

type Voices = SpeechSynthesisVoice | string;

function playMessage({ message }: Message): void {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(utterance);
}

function copyMessage({ message }: Message): void {
  navigator.clipboard.writeText(message);
  alert("Message copied to clipboard");
}

function likeMessage() { }

function downloadMessage() { }

function changeVoices(): void {
}

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
      <HeaderBar user={user} numberOfLikes={numberOfLikes} numberOfTimesCopied={numberOfTimesCopied} />
      <div className={styles["card-text"]}>{message}</div>
      <FooterBar message={message} />
    </div>
  );
}

function HeaderBar({ user, numberOfLikes, numberOfTimesCopied }: any) {
  return (
    <div className={styles["card-header"]}>
      <span>{user.toLocaleUpperCase()}</span>
      <span>
        {numberOfLikes} likes, {numberOfTimesCopied} copies
      </span>
    </div>
  )

}

function FooterBar({ message }: { message: string }) {
  // const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])
  let voices = window.speechSynthesis.getVoices();
  useEffect(() => {
    if (typeof window !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
      }
    }
  }, [])

  console.log(voices);
  return <div className={styles["card-footer"]}>
    <select
      className={styles["voice-dropdown"]}
      defaultValue={"DEFAULT"}
      onChange={changeVoices}
    >
      <option value="DEFAULT" disabled>
        Select a Voice
      </option>
      {voices.map((voice: any, index) => <option value={voice} key={index}>{voice.name}</option>)}
    </select>
    {/* {Actions.map((action) => Button({ message: messageObj, action }))} */}
    <button className={styles.cardButton} onClick={() => playMessage(message)}>
      <Image src={playIcon} alt="button" className={styles.buttonIcon} />
    </button>
  </div>
}

const Actions: [string, (e: Message) => void][] = [
  // [playIcon, playMessage],
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
      <Image src={""} alt="button" className={styles.buttonIcon} />
    </button>
  );
}

export default Card;

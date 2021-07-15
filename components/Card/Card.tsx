import styles from "./Card.module.css";

export interface Message {
  uid: number;
  user: string;
  message: string;
  voice: Voices;
  numberOfLikes: number;
  numberOfTimesCopied: number;
  // dateSaved: Date;
}

export type Voices = "Brian" | "Amy" | "Emma";

function setSpeech(): Promise<SpeechSynthesisVoice[]> {
  return new Promise(function (resolve, reject) {
    let synth = window.speechSynthesis;
    let id: any;

    id = setInterval(() => {
      if (synth.getVoices().length !== 0) {
        resolve(synth.getVoices());
        clearInterval(id);
      }
    }, 10);
  });
}

let messageVoices: SpeechSynthesisVoice[] = [];
setSpeech().then((voices) => {
  console.log(voices);
  messageVoices = voices;
});

function playMessage(message: string) {
  debugger;
  const speechSynthesis = new SpeechSynthesisUtterance();
  speechSynthesis.text = message;
  speechSynthesis.voice = messageVoices[0];
  window.speechSynthesis.pause();
  window.speechSynthesis.speak(speechSynthesis);
  console.log(message);
}

export function Card({
  user,
  message,
  voice,
  numberOfLikes,
  numberOfTimesCopied,
}: Message) {
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
        <select className={styles["voice-dropdown"]} value={voice}>
          {/* {messageVoices.map((voice, index) => (
            <option key={index}>{voice}</option>
          ))} */}
          <option>Brian</option>
          <option>Amy</option>
          <option>Emma</option>
        </select>
        <button
          className={styles.cardButton}
          onClick={() => playMessage(message)}
        >
          PLAY
        </button>
      </div>
    </div>
  );
}

export default Card;

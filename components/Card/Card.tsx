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

type Voices = string;

// function setSpeech(): Promise<SpeechSynthesisVoice[]> {
//   return new Promise(function (resolve, reject) {
//     let synth = window.speechSynthesis;
//     let id: any;

//     id = setInterval(() => {
//       if (synth.getVoices().length !== 0) {
//         resolve(synth.getVoices());
//         clearInterval(id);
//       }
//     }, 10);
//   });
// }

// let messageVoices: SpeechSynthesisVoice[] = [];
// setSpeech().then((voices) => {
//   console.log(voices);
//   messageVoices = voices;
// });

// let voices: SpeechSynthesisVoice[];
// if (window != undefined) {
//   voices = window.speechSynthesis.getVoices();
// }
// window.speechSynthesis.onvoiceschanged = () => {
//   voices = window.speechSynthesis.getVoices();
//   console.log(voices);
// };

function playMessage(message: string): void {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(utterance);
}

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
          {/* {voices.map((voice, index) => (
            <option key={index}>{voice}</option>
          ))} */}
          {/* <option>Brian</option>
          <option>Amy</option>
          <option>Emma</option> */}
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

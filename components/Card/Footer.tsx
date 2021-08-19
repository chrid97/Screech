import styles from "./Card.module.css";

function playMessage(message: string): void {
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(message);
  window.speechSynthesis.speak(utterance);
}

function Footer({ message }: { message: string }) {
  return (
    <div className={styles["card-footer"]}>
      <select className={styles["voice-dropdown"]} defaultValue={"DEFAULT"}>
        <option value="DEFAULT" disabled>
          Select a Voice
        </option>
        {/* {voices.map((voice, index) => (
            <option key={index}>{voice}</option>
          ))} */}
      </select>
      <PlayButton {...{ message }} />
    </div>
  );
}

function PlayButton({ message }: { message: string }) {
  return (
    <button
      className={styles.cardButton}
      onClick={() => {
        playMessage(message);
      }}
    >
      PLAY
    </button>
  );
}

export default Footer;

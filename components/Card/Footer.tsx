import styles from "./Card.module.css";
import Button from "../Button/Button";
import useSpeechSynthesis from "../../utils/useSpeechSynthesis";
import { useState } from "react";

function Footer({
  message,
  voice = "",
  voices,
}: {
  message: string;
  voice: string;
  voices: SpeechSynthesisVoice[];
}) {
  const newVoice = voices.find(({ name }) => name === voice) ?? null;
  const { isSpeaking, speak, cancel } = useSpeechSynthesis();
  const [selectedVoice, setSelectedVoice] =
    useState<SpeechSynthesisVoice | null>(newVoice);

  return (
    <div className={styles["card-footer"]}>
      <select
        className={styles["voice-dropdown"]}
        value={selectedVoice?.name ?? ""}
        onChange={(event) =>
          changeVoice(event.target.value, voices, setSelectedVoice)
        }
      >
        <option value={""} disabled>
          Select a Voice
        </option>
        {voices.map((voice, index) => (
          <option value={voice.name} key={index}>
            {voice.name}
          </option>
        ))}
      </select>
      {!isSpeaking ? (
        <PlayButton onClick={() => speak(message, selectedVoice)} />
      ) : (
        <StopButton onClick={() => cancel()} />
      )}
    </div>
  );
}

function changeVoice(
  voice: string,
  voices: SpeechSynthesisVoice[],
  setSelectedVoice: any
): void {
  const newVoice = voices.find(({ name }) => name === voice);
  setSelectedVoice(newVoice);
}

function PlayButton({ onClick }: { onClick: () => void }) {
  return <Button label="PLAY" onClick={() => onClick()} />;
}

function StopButton({ onClick }: { onClick: () => void }) {
  return <Button label="STOP" onClick={() => onClick()} />;
}

export default Footer;

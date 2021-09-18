import { useState, useEffect } from "react";

interface speechSynthesis {
  voices: SpeechSynthesisVoice[];
  speak: (s: string, voice: SpeechSynthesisVoice | null) => void;
  isSpeaking: boolean;
  cancel: () => void;
}

function useSpeechSynthesis(): speechSynthesis {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  function getVoices(): void {
    let voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      setVoices(voices);
      return;
    }

    window.speechSynthesis.onvoiceschanged = () => {
      setVoices([...window.speechSynthesis.getVoices()]);
    };
  }

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      getVoices();
    }
  }, []);

  function speak(text: string, voice: SpeechSynthesisVoice | null): void {
    window.speechSynthesis.cancel();
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  }

  function cancel(): void {
    setIsSpeaking(false);
    window.speechSynthesis.cancel();
  }

  return {
    voices,
    speak,
    isSpeaking,
    cancel,
  };
}

export default useSpeechSynthesis;

import { useEffect, useState } from "react";

function useGetVoices(): SpeechSynthesisVoice[] {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  function getVoices() {
    let voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      setVoices(voices);
      return;
    }

    window.speechSynthesis.onvoiceschanged = () => {
      setVoices(window.speechSynthesis.getVoices());
    };
  }

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      getVoices();
    }
  }, []);

  return voices;
}

export default useGetVoices;

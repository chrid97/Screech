import getVoices from "../hooks/useGetVoices";
import { createContext } from "react";

export const VoiceContext = createContext<SpeechSynthesisVoice[]>([]);
export const VoiceProvider = ({ children }: any) => {
  return (
    <VoiceContext.Provider value={getVoices()}>
      {children}
    </VoiceContext.Provider>
  );
};

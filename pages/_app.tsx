import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components";
import { VoiceProvider } from "../contexts/Voices";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <VoiceProvider>
    <div className={"container"}>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
    // </VoiceProvider>
  );
}
export default MyApp;

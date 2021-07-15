import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={"container"}>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  );
}
export default MyApp;

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card, { Message } from "../components/Card/Card";
import Link from "next/link";
import useSpeechSynthesis from "../utils/useSpeechSynthesis";

export default function Home() {
  const { voices } = useSpeechSynthesis();
  return (
    <>
      <Head>
        <title>Screech</title>
        <meta name="title" content="Screech" />
        <meta
          name="description"
          content="Find or save your favorite text-to-speech messages!"
        />
        <meta name="keywords" content="twitch, discord, text-to-speech," />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <header className={styles.header}>
        <h2 className={styles["sub-header"]}>WELCOME TO</h2>
        <h1 className={styles.title}>SCREECH</h1>
        <Link href="/NewMessage/" passHref>
          <button className={styles.button}>NEW TTS MESSAGE</button>
        </Link>
      </header>

      <main className={styles.main}>
        <div className={styles.grid}>
          {data.map((savedMessage) => {
            return (
              <Card {...savedMessage} {...{ voices }} key={savedMessage.uid} />
            );
          })}
        </div>
      </main>
    </>
  );
}

const data: Message[] = [
  {
    uid: 0,
    user: "Chris",
    message: "dododobobobobgjubgjubgjubdododobobobobgjubgjubgjub",
    voice: "Google Deutsch",
    numberOfLikes: 100,
    numberOfTimesCopied: 100,
  },
  {
    uid: 1,
    user: "Chris",
    message:
      "Don't you just hate it when your cat wakes you up like this? Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow. Meow.",
    voice: "Google US English",
    numberOfLikes: 100,
    numberOfTimesCopied: 100,
  },
  {
    uid: 2,
    user: "Chris",
    message:
      ":a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a: :a:A NEGATIVE SQUARED CAPTIAL LETTER",
    voice: "Google UK English Female",
    numberOfLikes: 50,
    numberOfTimesCopied: 100,
  },
  {
    uid: 3,
    user: "Chris",
    message:
      "The lawnmower goes shersheeeeeeerrerererereeeerrr vavavoom sherererererere and Rice burners go wowowowowowowowowowowowowowowowowowowowowowow",
    voice: "Google Nederlands",
    numberOfLikes: 50,
    numberOfTimesCopied: 100,
  },
  {
    uid: 4,
    user: "Chris",
    message:
      "The lawnmower goes shersheeeeeeerrerererereeeerrr vavavoom sherererererere and Rice burners go wowowowowowowowowowowowowowowowowowowowowowow",
    voice: "Google italiano",
    numberOfLikes: 50,
    numberOfTimesCopied: 100,
  },
  {
    uid: 5,
    user: "Chris",
    message:
      "The lawnmower goes shersheeeeeeerrerererereeeerrr vavavoom sherererererere and Rice burners go wowowowowowowowowowowowowowowowowowowowowowow",
    voice: "Google polski",
    numberOfLikes: 50,
    numberOfTimesCopied: 100,
  },
];

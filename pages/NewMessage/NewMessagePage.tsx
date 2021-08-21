import { useState } from "react";
import Footer from "../../components/Card/Footer";
import Header from "../../components/Card/Header";
import styles from "./NewMessagePage.module.css";
import useSpeechSynthesis from "../../utils/useSpeechSynthesis";

function NewMessagePage() {
  const [textAreaValue, setTextAreaValue] = useState("");
  const { voices } = useSpeechSynthesis();
  return (
    <div className={styles.container}>
      <Header user="" numberOfTimesCopied={0} numberOfLikes={0} />
      <div className={styles.textInput}>
        <textarea
          rows={20}
          cols={50}
          className={styles.input}
          onChange={(event) => setTextAreaValue(event.target.value)}
        />
      </div>
      <Footer message={textAreaValue} voice={""} {...{ voices }} />
    </div>
  );
}

export default NewMessagePage;

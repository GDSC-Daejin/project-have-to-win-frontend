import styles from "./page.module.css";
import LearningOption from "./component/LearningOption";
import SelectModel from "./component/SelectModel";
import FileUpload from "./component/FileUpload";
import FileDownload from "./component/FileDownload";
import PrintLog from "./component/PrintLog";

export default function Home() {
  return (
    <main className={styles.main}>
      <PrintLog />
      <FileUpload />
      <LearningOption />
      <SelectModel />
      <FileDownload />
    </main>
  );
}

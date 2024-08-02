import Image from "next/image";
import styles from "./home.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>Creative Thought Agency</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          cupiditate expedita eum nam, impedit quidem nemo commodi quod
          repellat.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/.images/brands.png" alt="" fill />
        </div>
      </div>
      <div className={styles.imageContainer}></div>
    </div>
  );
}

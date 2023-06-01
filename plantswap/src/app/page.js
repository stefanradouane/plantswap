import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Card from "../../components/Card/Card";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Open testpage
          <Link className={styles.anchor} href="/test">
            here
          </Link>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer">
            By{" "}
            <Image
              src="/logo.webp"
              alt="logo plantswap"
              className={styles.plantswapLogo}
              width={256}
              height={103}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Card
          cta={"Component"}
          tagline={"Zo gebruik je dus een Next.js Component"}
        />

        <Card
          cta={"Scan een plant"}
          tagline={"Maak een foto of gebruik een foto uit je gallerij"}
        />
      </div>
    </main>
  );
}

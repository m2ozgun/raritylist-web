import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RarityList</title>
        <meta name="description" content="NFT Monitoring and analyzing tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Coming <a>soon!</a>
        </h1>

        <p className={styles.description}>
          Join our Discord to check NFT rarities
        </p>

        <iframe
          src="https://discord.com/widget?id=939755161369313280&theme=dark"
          width="350"
          height="500"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>

        <a
          href="https://twitter.com/raritylist"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socials}
        >
          Join our Twitter
          <span className={styles.logo}>
            <Image
              src="/twitter.png"
              alt="Vercel Logo"
              width={12}
              height={12}
            />
          </span>
        </a>
      </main>
    </div>
  );
};

export default Home;

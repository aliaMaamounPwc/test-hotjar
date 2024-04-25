'use client';
import Image from 'next/image';
import styles from '../page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Image className={styles.logo} src='/next.svg' alt='Next.js Logo' width={180} height={37} priority />
        <div className={styles.nav}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/getStarted'>Get Started</Link>
        </div>
      </div>

      <div className={styles.center}>
        <Image className={styles.logo} src='/hotjar_logo.jpg' width={500} height={300} alt='Next.js Logo' priority />
        <h2>About Hotjar</h2>
        <button
          className={styles.btn}
          onClick={() => {
            console.log('Click for more clicked');
          }}>
          Click for more
        </button>
      </div>
    </main>
  );
}

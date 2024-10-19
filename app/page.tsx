import Image from "next/image";
import d3cimg from '../public/d3cimg.jpg';
import styles from '@/app/ui/home.module.css';
import { inter } from "./ui/fonts";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {/* <div className={"styles.shape"}> */}
          <Image
            className="destkopLogo self-center"
            src={d3cimg}
            alt="d3c logo"
            width={480}
            priority
          />
          <h1 className="text-center sm:text-left font-[family-name:var(--font-geist-mono)]">esto usa font geist-mono</h1>
          <h2 className={`${inter.className}`}>esto está con font inter</h2>
          <div>los botones están en geist-sans (esto también, porque está en classname del main)</div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <Image
                className="dark:invert"
                src=""
                alt=""
                width={20}
                height={20}
              /> */}
              lets get drafty!
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              data (no opinion)
            </a>
          </div>
          {/* </div> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          mtg?
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          draft?
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          d3c.org →
        </a>
      </footer>
    </div>
  );
}

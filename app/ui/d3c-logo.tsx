import { GlobeAltIcon } from "@heroicons/react/24/outline";
import zorakImg from '../../public/zorak.png';
import Image from "next/image";


export default function D3clogo() {
    return (
        <div
        className="justify-between w-full md:w-50 font-[family-name:var(--font-geist-mono)] flex flex-row md:flex-col gap-3 items-center leading-none text-white"
        >
        <Image
          className="mdZorak rounded-md"
          src={zorakImg}
          alt="zorak"
          width={96}
          priority
        />
            {/* <GlobeAltIcon className="h-22 w-22 rotate-[30deg]" /> */}
        <p className="text-[22px]">Draft.io</p>
        <Image
          className="smZorak rounded-md"
          src={zorakImg}
          alt="zorak"
          width={64}
          priority
        />
        </div>
    );
}
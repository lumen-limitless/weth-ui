'use client';

import { ModeToggle } from '@/components/mode-toggle';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Image from 'next/image';
import wethImg from 'public/weth.png';

export default function Header() {
  return (
    <header
      id="header"
      className="sticky top-0 z-20 flex h-16 w-full items-center border-b px-5"
    >
      <div className="flex w-full justify-between">
        <Image src={wethImg} alt="WETH" className="h-8 w-8" />
        <div className="flex items-center justify-center gap-5">
          <ConnectButton />
          <div className="hidden lg:block">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
